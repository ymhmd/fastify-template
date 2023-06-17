export const helloHandler = async (request: any, response: any) => {
  const { username } = request.query;

  response.code(200).send({ message: `Hello ${username}!` });
};
