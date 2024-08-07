import reports from "../models/ReportModel.js";

class ReportController {

    static async findAllReports(req, res) {
        const allReports = await reports.findAll();
        res.status(200).json(allReports);
    }

    static async registerNewReport(req, res) { 
        const newReport = req.body;
        const createReport = await reports.create(newReport);
        res.status(200).json({
            mesage: `New report created `,
            report: createReport
        });
    }
}

export default ReportController;