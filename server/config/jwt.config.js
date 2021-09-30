const jwt = require('jsonwebtoken');
const secret = "this is a secret";
module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret, (err) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}