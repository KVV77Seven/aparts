const jwt = require('jsonwebtoken');
const TokenModel = require('../models/TokenModel');

class TokenService {
  async generateTokens(payload) {
    const acccessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    return {
      acccessToken,
      refreshToken
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({user: userId});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      tokenData.save();
    }
    const token = TokenModel.create({user: userId, refreshToken});
    return token
  }

  async removeToken(refreshToken) {
    const tokenData = TokenModel.deleteOne({refreshToken});
    return tokenData
  }

  async findToken(refreshToken) {
    const tokenData = TokenModel.findOne({refreshToken});
    return tokenData
  }

  async validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData
    } catch(e) {
      return null
    }
  }

  async validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData
    } catch(e) {
      return null
    }
  }
}

module.exports = new TokenService();