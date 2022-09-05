import { Request, Response } from "express";

export class HomeController {
  static handle(req: Request, res: Response): Response {
    return res.json({ hello: "world" });
  }
}
