import User from "../models/UserModel.js";

class UserController {

    static async findAllUser(req, res) {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    }

    static async getUserById (req, res) {
        const { id } = req.params;
    
        try {
            const user = await User.findByPk(id);
    
            if (user) {
                res.status(200).json(user); 
            } else {
                res.status(404).json({ message: "User not found" }); 
            }
        } catch (error) {
            res.status(500).json({ message: "Error on fetch this user :/", error: error.message });
        }
    }

    static async registerNewUser(req, res) { 
        const newUser = req.body;
        const createUser = await User.create(newUser);
        res.status(200).json({
            message: `New user created`,
            report: createUser
        });
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            await user.destroy();
            res.status(200).json({
                message: "user deleted"
            })
        } catch(error) {
            res.status(500).json({ 
                message: "request failure", error 
            });
        }
    }
}

export default UserController;