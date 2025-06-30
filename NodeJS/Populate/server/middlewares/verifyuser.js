const jwt = require("jsonwebtoken");

exports.verifyuser = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.json({
        success: false,
        message: "Token not found",
      });
    }
    token = token.split(" ")[1];
    try {
      const verifyuser = jwt.verify(token, process.env.JWT_Secret);
      if (!verifyuser) {
        return res.json({
          success: false,
          message: "Invalid token",
        });
      }
      req.user = verifyuser;
      next();
    } catch (jwtError) {
      console.error("JWT verification error:", jwtError);
      return res.json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  } catch (error) {
    console.error("Middleware error:", error);
    return res.json({
      success: false,
      message: "Authentication failed",
    });
  }
};
