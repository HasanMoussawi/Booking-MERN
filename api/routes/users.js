import express from "express";
import { deleteUser, getUser, updateUser, getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("hello user, you are logged in")
})

//Update
router.put("/:id", updateUser );
//Delete
router.put("/:id", deleteUser );
//Get
router.get("/:id", getUser );
//GetAll
router.get("/", getUsers );

export default router