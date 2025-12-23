import { oc } from "@orpc/contract";
import { z } from "zod";

export const orpcContract = oc.router({
  hello: oc.output(z.string()),
});
