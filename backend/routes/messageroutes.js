import express from "express";
import { getmessages, sendMessage } from "../controllers/messagecontroller.js";
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.post("/:id",protectRoute,getmessages)
router.get("/message/:id",protectRoute,sendMessage)

export default router;
