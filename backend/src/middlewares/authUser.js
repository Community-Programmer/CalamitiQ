import createHttpError from 'http-errors';
import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;


const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(createHttpError(401, 'Authorization token is required.'));
  }

  try {
    const decoded = verify(token, process.env.SECRET_KEY);
    
    req.userId = decoded.sub;
    next();
    
  } catch (err) {
    return next(createHttpError(401, 'Token is invalid or expired.'));
  }
};

export default authenticateUser;
