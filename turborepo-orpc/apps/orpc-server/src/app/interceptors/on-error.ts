import { ORPCError } from "@orpc/server";

export const onErrorInterceptor = (error: unknown) => {
  console.error(error);

  if (!(error instanceof ORPCError)) {
    throw new ORPCError("INTERNAL_SERVER_ERROR", {
      message: error instanceof Error ? error.message : "An unexpected error occurred",
      cause: error,
    });
  }
};
