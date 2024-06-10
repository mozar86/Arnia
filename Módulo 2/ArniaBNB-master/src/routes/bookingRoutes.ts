import { Router } from "express";
import { createBooking, cancelBooking, listBookingsByGuest } from "../controllers/bookingController";
import { authenticateAdminJWT } from "../middlewares/authAdmin";
import { authenticateGuestJWT } from "../middlewares/authGuest";

const router = Router();

router.post("/createBooking", authenticateAdminJWT, createBooking);
router.patch("/cancel", authenticateAdminJWT, cancelBooking);
router.get("/get", authenticateGuestJWT, listBookingsByGuest);

export default router;
