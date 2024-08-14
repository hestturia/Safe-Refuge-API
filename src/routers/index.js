import express from "express";
import reports from "./reportsRoutes.js";
import service from "./serviceRouter.js";
import user from "./userRoutes.js";

const routes = (app) => {
    app.use(express.json(), 
    reports,
    service,
    user
)
}


export default routes