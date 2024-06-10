import { Router } from "express";
import { createRoom, updateRoomController, listAvailableRooms, listAvailableRoomsByDate } from "../controllers/roomController";
import { authenticateAdminJWT } from "../middlewares/authAdmin";
import { verifyRoomExists } from "../middlewares/verifyRoom";
import validate from "../middlewares/validate";
import * as roomSchema from '../schemas/room';

const router = Router();

router.post("/createRoom", authenticateAdminJWT, validate(roomSchema.RoomCreate.schema), createRoom);
router.patch("/updateRoom/:id", authenticateAdminJWT, updateRoomController);
router.get("/listRoomAvailable", listAvailableRooms);
router.get("/list", listAvailableRoomsByDate);

export default router;
