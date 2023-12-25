import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = 
    req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token) {
        return res.status(403).json({ success: false, message: "User token required"})
    }
    try {
        const decoded = jwt.verify(token, "ThisIsNothing");
        req.users = decoded;
    } catch (error) {
        return  res.status(402).json({ success: false, message: "User token is incorrect or inactive"})
    }
    return next();
};