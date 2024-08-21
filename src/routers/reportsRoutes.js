import ReportController from "../controllers/ReportController.js";
import { Router } from "express";

const routes = Router();

routes.get("/reports/all", ReportController.findAllReports);
routes.get("/reports/:id", ReportController.findReportsById);
routes.post("/reports/create", ReportController.registerNewReport);
routes.put("/reports/update/:id", ReportController.updateReport);
routes.delete("/reports/delete/:id", ReportController.deleteReport);



export default routes;