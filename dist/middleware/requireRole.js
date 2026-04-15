"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requireRole(role) {
    return (req, res, next) => {
        const authReq = req;
        const authUser = authReq.user;
        if (!authUser) {
            return res.status(401).json({
                message: "You are not auth user! you cant enter the building",
            });
        }
        if (authUser.role !== role) {
            return res
                .status(403)
                .json({ message: "You dont have correct role to access this route" });
        }
        next();
    };
}
exports.default = requireRole;
