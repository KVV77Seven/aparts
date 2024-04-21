const ApiError = require('../exeptions/ApiError')
const tokenService = require('../service/TokenService')

module.exports = function (req, res, next ) {
  try {
    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader) {
      return next(ApiError.UnathorizedError());
    }

    const acccessToken = authorizationHeader.split(' ')[1];
    if(!acccessToken) {
      return next(ApiError.UnathorizedError());
    }

    const userData = tokenService.validateAccessToken(acccessToken);
    if(!userData) {
      return next(ApiError.UnathorizedError());
    }

    req.user = userData;
    next();
  } catch(e) {
    return next(ApiError.UnathorizedError())
  }
}