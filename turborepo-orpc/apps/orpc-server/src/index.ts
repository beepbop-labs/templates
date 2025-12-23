import { Hono } from "hono";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { CORSPlugin } from "@orpc/server/plugins";
import { ZodSmartCoercionPlugin } from "@orpc/zod";
import { onError } from "@orpc/server";
import { onErrorInterceptor } from "./app/interceptors/on-error";
import { openApiRouter } from "./app/router.open-api";
import { router } from "./app/router";

const app = new Hono();

// OpenAPI-compatible REST handler
const openAPIHandler = new OpenAPIHandler(router, {
  plugins: [new CORSPlugin(), new ZodSmartCoercionPlugin()],
  interceptors: [onError(onErrorInterceptor)],
});

// Serve REST endpoints under /*
app.use("/*", async (c, next) => {
  const { matched, response } = await openAPIHandler.handle(c.req.raw, {
    context: {
      request: c.req.raw,
    },
  });

  if (matched) return c.newResponse(response.body, response);
  await next();
});

// OpenAPI spec and docs
app.route("/", openApiRouter);

export default app;
