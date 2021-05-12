const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                msg: 'Token error',
                err
            })
        }
        // user info
        req.user = decoded.data; //data viene al generar el token en login.js
        next();
    });
}

let checkRole = (req, res, next) => {
    let role = req.user.role;
    console.log(role);
    if (role !== 'ADMIN') {
        return res.status(401).json({
            msg: 'Role not authorized'
        })
    }
    next();
}

module.exports = { checkAuth, checkRole };