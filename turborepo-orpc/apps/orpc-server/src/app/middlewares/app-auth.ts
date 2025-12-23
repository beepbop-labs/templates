import { ORPCError } from "@orpc/server";
import { ENV } from "../../main/lib/env";
import { baseOs } from "../os/base";

export const appAuthMiddleware = baseOs.middleware(async ({ context, next }) => {
  const { request } = context;

  const apiKey = request.headers.get("x-app-key") ?? new URL(request.url).searchParams.get("app_key");

  if (!apiKey || apiKey !== ENV.APP_KEY) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "Invalid App key",
    });
  }

  return next();
});
