const User = require("../models/User");
const { hashPassword, plainPassword } = require("../utils/password");

// REGISTER
exports.register = async (req, res) => {
    try {
        const { name, email, password, confirm_password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        if (password !== confirm_password) {
            return res.json({
                success: false,
                message: "Password and Confirm Password must match"
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword });

        res.json({
            success: true,
            message: "User registered successfully",
            user
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User not registered"
            });
        }

        const isPasswordCorrect = await plainPassword(password, user.password);
        if (!isPasswordCorrect) {
            return res.json({
                success: false,
                message: "Invalid password"
            });
        }

        const payload = {
            id: user._id,
            email: user.email
        };

        res.cookie("admin", payload, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        }).json({
            success: true,
            message: "Login successful",
            user
        });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
};

// LOGOUT
exports.logout = async (req, res) => {
    try {
        const token = req.cookies.admin;
        if (!token) {
            return res.json({
                success: false,
                message: "User not logged in"
            });
        }

        res.clearCookie("admin").json({
            success: true,
            message: "Logout successful"
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
};

// VERIFY USER
exports.verifyuser = async (req, res) => {
    try {
        const token = req.cookies.admin;

        if (!token) {
            return res.json({
                success: false,
                message: "Token not found"
            });
        }

        const user = await User.findById(token.id); // You should extract ID from the cookie
        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Server error" });
    }
};
