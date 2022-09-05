import { Request, Response } from "express";

export enum Roles {
  ADMIN = "ADMIN",
  CREATOR = "CREATOR",
  EDITOR = "EDITOR",
}
function Authenticate(roleRoute: Roles[]) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      const request: Request = args[0];
      const response: Response = args[0].res;

      const role = request.headers?.role;

      if (!roleRoute.some((e) => e === role)) {
        return response.status(400).json({
          error: "User not Authenticated",
        });
      }

      const result = originalMethod.apply(this, args);
      return result;
    };

    return descriptor;
  };
}

export { Authenticate };
