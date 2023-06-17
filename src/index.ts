import { fastify } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";

import { PORT, ROUTES_PREFIX, swaggerOptions, swaggerUiOptions } from "./utils";
import { helloSchema, helloHandler } from "./v1/hello";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  exposeHeadRoutes: false,
});

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(cors);

app.register(
  (app, options, done) => {
    // pre-handlers
    app.addHook("preHandler", (request: any, response: any, done: any) => {
      // Add your preHandler logic
      done();
    });

    // endpoints
    app.get("/hello", {
      schema: helloSchema,
      handler: helloHandler,
    });
    done();
  },
  { prefix: ROUTES_PREFIX }
);

app.listen(
  {
    port: PORT,
    host: "0.0.0.0",
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
