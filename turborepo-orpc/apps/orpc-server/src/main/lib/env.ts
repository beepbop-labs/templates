import { zEnv } from "@bb-labs/zod-env";
import { z } from "zod";

const HEX_64_REGEX = /^[a-f0-9]{64}$/;

export const ENV = zEnv(process.env, {
  APP_KEY: z.string().regex(HEX_64_REGEX, "APP_KEY must be a 64-character lowercase hex string"),
});
