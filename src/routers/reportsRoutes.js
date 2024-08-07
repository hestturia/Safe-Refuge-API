import ReportController from "../controllers/ReportController.js";
import { Router } from "express";

const routes = Router();

routes.get("/reports/all", ReportController.findAllReports);
routes.post("/reports/create", ReportController.registerNewReport);

export default routes;