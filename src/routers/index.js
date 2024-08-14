import express from "express";
import reports from "./reportsRoutes.js";
import service from "./serviceRouter.js";
import user from "./userRoutes.js";
import EmergencyContact from './EmergencyContactRoutes.js';

const routes = (app) => {
    app.use(express.json(), 
    reports,
    service,
    user,
    EmergencyContact
)};

export default routes;