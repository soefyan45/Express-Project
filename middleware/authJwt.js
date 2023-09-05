const jwt = require('jsonwebtoken')
verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    let {TOKEN_SECRET} = process.env
    jwt.verify(token, TOKEN_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Error",
                errors: err
            });
        }
        next();
    });
};
logOut =async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    res.clearCookie('nToken');
    return res.json({success: true, message: 'Logout success'});
}
const authJwt = {
    verifyToken     : verifyToken,
    logOut          : logOut
};
module.exports = authJwt;