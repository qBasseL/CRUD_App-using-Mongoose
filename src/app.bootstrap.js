import express from "express";
import { PORT } from "../config/config.service.js";
import { authenticateDB } from "./DB/db.connection.js";
import { userRouter, productRouter } from "./Modules/index.js";
import { globalErrorHandler } from "./Common/utils/index.js";

const bootstrap = async () => {
  const app = express();

  app.use(express.json());
  await authenticateDB();

  app.use("/users", userRouter);
  app.use("/products", productRouter);

  app.use(globalErrorHandler);

  app.use("{/*dummy}", (req, res, next) => {
    return res.status(404).json({
      Message: "Invalid Routing",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
  });
};

export default bootstrap;
