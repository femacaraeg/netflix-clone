async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    stats {
      favourited
      id
      userId
      videoId
      watched
    }
    users {
      id
      email
      issuer
    }
  }
  
  mutation MyMutation {
    __typename
  }
`;

function fetchMyQuery() {
  return queryHasuraGQL(operationsDoc, 'MyQuery', {});
}

function executeMyMutation() {
  return queryHasuraGQL(operationsDoc, 'MyMutation', {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
