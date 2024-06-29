import express from 'express';
import { signup, login } from '../controller/user.controller.js';
console.log("reached to router");
const router=express.Router();

router.post("/signup",signup);
router.post("/login", login);

export default router;