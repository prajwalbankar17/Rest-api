import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 24,
//   },
// ];


router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.get("/:id", getUser);

router.patch("/:id", updateUser);

export default router;
