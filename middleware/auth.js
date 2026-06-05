const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ 
                success: false, 
                message: "Access denied. No token provided." 
            });
        }

        // Verify token
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user to request
        req.user = decoded;
        next();

    } catch (err) {
        res.status(401).json({ 
            success: false, 
            message: "Invalid or expired token." 
        });
    }
};

module.exports = protect;