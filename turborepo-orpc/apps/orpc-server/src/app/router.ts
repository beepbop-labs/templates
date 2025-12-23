import { baseOs } from "./os/base";

export const router = baseOs.router({
  hello: baseOs.hello.handler(() => "Hello World"),
});
