const jwt = require("jsonwebtoken");

module.exports.secret = process.env.JWT_SECRET_KEY;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies?.usertoken, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}