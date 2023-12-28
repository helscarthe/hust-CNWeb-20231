import { Router } from "express";
import UserController from "../controllers/users";

export default function account(app) {
    const router = Router();
    app.use("/api/users", router);
  
    // POST {baseURL}/api/account
    // router.post("/", UsersController.register);
  
    // GET {baseURL}/api/account/:id
    router.get( "/:id", UserController.getUserByID);
  }