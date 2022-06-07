import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";


const router = express.Router();

//Create
router.post("/", createHotel );
//Update
router.put("/:id", updateHotel );
//Delete
router.put("/:id", deleteHotel );
//Get
router.get("/:id", getHotel );
//GetAll
router.get("/", getHotels );

export default router