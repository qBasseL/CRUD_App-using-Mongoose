import { Router } from "express";
import { addUser, findUser, findAll, updateUser, deleteProfile } from "./user.service.js";
import { successResponce } from "../../Common/utils/index.js";

const router = Router();

router.post("/add", async (req, res, next) => {
  const result = await addUser(req.body);
  return successResponce({res, status:201, data: result})
});

router.get("/:userId", async (req, res, next) => {
  const result = await findUser(req.params.userId);
  return successResponce({red, status:200, data: result})
});

router.get("/", async (req, res, next) => {
  const result = await findAll();
  return successResponce({red, status:200, data: result})
});

router.patch("/:userId", async (req, res, next) => {
  const result = await updateUser(req.params.userId, req.body);
  return successResponce({red, status:200, data: result})
});

router.delete("/:userId", async (req, res, next) => {
  const result = await deleteProfile(req.params.userId);
  return successResponce({red, status:200, data: result})
});


export default router;
