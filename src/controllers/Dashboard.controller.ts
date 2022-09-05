import { Request, Response } from "express";
import { Authenticate, Roles } from "../decorators/authenticate";

export class DashboardController {
  @Authenticate([Roles.ADMIN])
  static admin(req: Request, res: Response): Response {
    return res.json({ accept_role: [Roles.ADMIN] });
  }

  @Authenticate([Roles.ADMIN, Roles.CREATOR])
  static creator(req: Request, res: Response): Response {
    return res.json({ accept_role: [Roles.ADMIN, Roles.CREATOR] });
  }

  @Authenticate([Roles.ADMIN, Roles.CREATOR, Roles.EDITOR])
  static editor(req: Request, res: Response): Response {
    return res.json({
      accept_role: [Roles.ADMIN, Roles.CREATOR, Roles.EDITOR],
    });
  }
}
