import { magicAdmin } from '../../lib/magic';
import jwt from 'jsonwebtoken';
import { isNewUser } from '../../lib/hasura';

export default async function login(req, res) {
  if (req.method === 'POST') {
    try {
      const auth = req.headers.authorization;
      const didToken = auth ? auth.substring(7) : '';

      // // invoke magic
      const metadata = await magicAdmin.users.getMetadataByToken(didToken);

      // // create jwt
      const token = jwt.sign(
        {
          ...metadata,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['user', 'admin'],
            'x-hasura-default-role': 'user',
            'x-hasura-user-id': `${metadata.issuer}`,
          },
        },
        process.env.JWT_SECRET
      );

      // CHECK IF USER EXISTS
      const isNewUserQuery = await isNewUser(token, metadata.issuer);
      res.send({ done: true, isNewUserQuery });
    } catch (error) {
      console.error('Something went wrong logging in', error);
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
