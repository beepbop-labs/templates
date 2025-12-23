import { Hono } from "hono";
import { OpenAPIGenerator } from "@orpc/openapi";
import { ZodToJsonSchemaConverter } from "@orpc/zod";
import { Scalar } from "@scalar/hono-api-reference";
import { router } from "./router";

const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});

export const openApiRouter: Hono = new Hono()
  .get("/spec.json", async (c) => {
    const spec = await openAPIGenerator.generate(router);
    return c.json(spec);
  })
  .get("/docs", Scalar({ url: "/spec.json" }));
