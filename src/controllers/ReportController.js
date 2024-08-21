import reports from "../models/ReportModel.js";

class ReportController {

    static async findAllReports(req, res) {
        try {
            const allReports = await reports.findAll();
            res.status(200).json(allReports);
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }
    }

    static async findReportsById(req, res) {
        try {
            const { id } = req.params;
            const findReportById = await reports.findByPk(id);
            res.status(200).json(findReportById);
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }
    }

    static async registerNewReport(req, res) { 
        try {
            const newReport = req.body;
            const createReport = await reports.create(newReport);
            res.status(200).json({
                message: `New report created `,
                report: createReport
            });
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }
    }

    static async updateReport(req, res) {
        try {
            const { id } = req.params;
            const { descrition, location, anonymous  } = req.body;
            const report = await reports.findByPk(id);
           
            report.descrition = descrition;
            report.location = location;
            report.anonymous = anonymous;
            await report.save();
            res.status(200).json({
                message: "report updated successfully",
                report: report
            });
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }

    }

    static async deleteReport(req, res) {
        try {
            const { id } = req.params;
            const report = await reports.findByPk(id);
            await report.destroy();
            res.status(200).json({
                message: "report deleted"
            })
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }
    }
}

export default ReportController;