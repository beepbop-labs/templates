import { orpcContract } from "@bb-labs/creato-api-auth-contract";
import { implement } from "@orpc/server";

const os = implement(orpcContract);

export const baseOs = os.$context<{ request: Request }>();
