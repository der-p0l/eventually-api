import { Router } from "express";

const router = Router();

router.use("/auth", require("./AuthRouter"));

export = router;
