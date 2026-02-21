import { Router } from "express";
import { addUser, findUser, findAll, updateUser, deleteProfile } from "./user.service.js";
const router = Router();

router.post("/add", async (req, res, next) => {
  const result = await addUser(req.body);
  return res.status(201).json({
    Message: "Addition Done",
    result,
  });
});

router.get("/:userId", async (req, res, next) => {
  const result = await findUser(req.params.userId);
  return res.status(200).json({
    Message: "Profile Done",
    result,
  });
});

router.get("/", async (req, res, next) => {
  const result = await findAll();
  return res.status(200).json({
    Message: "All Profiles Done",
    result,
  });
});

router.patch("/:userId", async (req, res, next) => {
  const result = await updateUser(req.params.userId, req.body);
  return res.status(200).json({
    Message: "Profile Updated",
    result,
  });
});

router.delete("/:userId", async (req, res, next) => {
  const result = await deleteProfile(req.params.userId);
  return res.status(200).json({
    Message: "Profile Deleted",
    result,
  });
});


export default router;
