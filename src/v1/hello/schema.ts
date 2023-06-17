export const helloSchema = {
  tags: ["hello"],
  querystring: {
    type: "object",
    required: ["username"],
    properties: {
      username: { type: "string", description: "hello username" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "greeting message",
        },
      },
    },
  },
};
