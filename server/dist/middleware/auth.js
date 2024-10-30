import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.sendStatus(401); // Unauthorized if no token is provided
    }
    jwt.verify(token, 'yourSecretKey', (err, decoded) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if the token is invalid
        }
        req.user = decoded;
        next(); // Proceed to the next middleware/route handler
        return;
    });
    return;
};
