const User = require('../../models/user');
const validUser = async (req, res, next) => {
  // 로그인이 되어있는지, 접근해도 되는 사용자인지 체크하는 로직
  // POST: login 로직을 보면 req.session.userID = user._id 로 로그인 성공했을 때 세션에 userId를 담아준다.
  // 이 session은 front까지 전달되고, 서버는 이 로그인 했다는 정보를 메모리에 갖고 있는다.
  // front가 API를 호출할 때 이 validUser 미들웨어가 걸려있으면 req.session에 받았던 userId를 그대로 보내기 때문에
  // 이 userID를 가지고 누가 접속했는지 서버가 알 수 있다.

  // API 접근 시 세션에 userID가 없으면 로그인을 하지 않은 상태이다.
  if (!req.session.userID)
    return res.status(403).send({
      message: 'not logged in',
    });

  // session에 userID가 있지만 DB에 없는 user라면 로그인 하지 못하므로 로그인하지 못했다는 에러를 보내고 있으면
  // req.user 에 user정보를 담아 이 미들웨어를 호출한 API에서 싣어준 user 데이터를 사용할 수 있다.
  try {
    const user = await User.findOne({
      _id: req.session.userID,
    });
    if (!user) {
      return res.status(403).send({
        message: 'not logged in',
      });
    }
    req.user = user;
  } catch (error) {
    return res.status(403).send({
      message: 'not logged in',
    });
  }

  next();
};

module.exports = {
  validUser,
};
