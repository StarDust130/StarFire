import { Router, type Router as RouterType } from "express";

const healthRouter: RouterType = Router();

healthRouter.get("/", (_, res) => {
  res.json({
    status: "ok",
  });
});

export default healthRouter;