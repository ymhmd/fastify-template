import { PORT, ROUTES_PREFIX } from "./server";

export const swaggerOptions = {
  swagger: {
    info: {
      title: "Fastify template",
      description: "Fastify template description",
      version: "1.0.0",
    },
    host: `localhost:${PORT}`,
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "hello", description: "hello" }],
  },
};

export const swaggerUiOptions = {
  routePrefix: `${ROUTES_PREFIX}`,
  exposeRoute: true,
};
