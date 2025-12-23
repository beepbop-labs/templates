import { ORPCError } from "@orpc/server";
import { ENV } from "../../main/lib/env";
import { baseOs } from "../os/base";

export const creatoAppAuthMiddleware = baseOs.middleware(async ({ context, next }) => {
  const { request } = context;

  const apiKey = request.headers.get("x-creato-app-key") ?? new URL(request.url).searchParams.get("creato_app_key");

  if (!apiKey || apiKey !== ENV.CREATO_APP_KEY) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "Invalid Creato App key",
    });
  }

  return next();
});
