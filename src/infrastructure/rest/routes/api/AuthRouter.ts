import { Router } from "express";
import AuthController from "../../controllers/AuthController";
import UserUseCases from "../../../../application/useCases/UserUseCases";
import UserRepositoryMemoryAdapter from "../../../adapters/UserRepositoryMemoryAdapter";
import UserService from "../../../../domain/services/UserService";
import MemoryDb from "../../../interfaces/MemoryDb";

const router = Router();

// TODO: move to dependency injection
const db: MemoryDb = {
  users: [],
};
const userRepository = new UserRepositoryMemoryAdapter(db);
const userService = new UserService();
const userUseCases = new UserUseCases(userRepository, userService);

const controller = new AuthController(userUseCases);

router.post("/register", controller.register);
router.post("/login", controller.login);

export = router;
