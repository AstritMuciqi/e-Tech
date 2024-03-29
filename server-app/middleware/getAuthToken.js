const getAuthToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    //Bearer fasdg12rv4gh32f443ghf13
    if(authorizationHeader && authorizationHeader.split(' ')[0] === 'Bearer'){
      req.authToken = authorizationHeader.split(' ')[1]
    }else{
      req.authToken = null;
    }
    next();
  }

  module.exports = getAuthToken;