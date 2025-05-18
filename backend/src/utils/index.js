const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET || "my-secret-8965165"

authMiddleware = (req, res, next) => {
    // TODO: Implement auth middleware
    //get token from header
    //verify token
    //add user to request

    const tokenFromHeader = req.headers["auth-token"];
    // console.log(tokenFromHeader)

    // verifying is the token exist
    if (!tokenFromHeader) {
        return res.status(401).json({ error: true, message: 'No token provided' });
    }

    jwt.verify(tokenFromHeader, secretKey, (error, decoded) => {
        if (error) {
            console.error('Token verification failed:', error);
            return res.status(401).json({ error: true, message: 'Token is not valid' });
        }

        req.user = decoded;
        next();
    })
}

module.exports = {
    authMiddleware
}