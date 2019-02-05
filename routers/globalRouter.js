import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
//import { join, login, logout } from "../controllers/userController";
import {
    getJoin,
    login,
    logout,
    postJoin,
    getLogin,
    postLogin
  } from "../controllers/userController";

const globalRouter = express.Router();

// globalRouter.get(routes.home, (req, res) => res.send("Home11"));
// globalRouter.get(routes.join, (req, res) => res.send("Join"));
// globalRouter.get(routes.login, (req, res) => res.send("Login"));
// globalRouter.get(routes.logout, (req, res) => res.send("Logout"));
// globalRouter.get(routes.search, (req, res) => res.send("Search"));

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
//globalRouter.get(routes.join, join);
//globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;