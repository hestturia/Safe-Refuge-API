import express from "express";
import reports from "./reportsRoutes.js";
import service from "./serviceRouter.js";

const routes = (app) => {
    app.use(express.json(), 
    reports,
    service
)
}

export default routes;