import { Request, Response } from "express";
import UserUseCases from "../../../application/useCases/UserUseCases";

class AuthController {

  constructor(
    private userUseCases: UserUseCases
  ) {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  register(req: Request, res: Response) {
    try {
      this.userUseCases.register(req.body.email, req.body.password);
      res.status(200).send("OK");
    } catch (error) {
      // TODO: handle errors
      console.error(error);
      res.status(500).send("Unknown Error");
    }
  }

  login(req: Request, res: Response) {
    try {
      this.userUseCases.login(req.body.email, req.body.password);
      // TODO: return jwt
      res.status(200).send("OK");
    } catch (error) {
      // TODO: handle errors
      console.error(error);
      res.status(500).send("Unknown Error");
    }
  }

}

export default AuthController;
