const { Schema, model } = require('mongoose');
const argon2 = require('argon2');

const userSchema = new Schema({
  username: String,
  password: String,
  location: String,
});

// userSchema에 저장되기 전에 실행되는 로직
// password를 원문 그대로 저장하면 DB가 털리거나 개발자가 DB를 들여다 보거나 하면 문제가 됨.
// password를 해싱해서 저장하면 원문은 복구할 수 없지만, 입력한 password가 맞는지는 체크 가능하므로 해싱
// argon2 알고리즘 사용하기 위해 argon2 모듈 가져옴
userSchema.pre('save', async function (next) {
  // 3가지 경우가 있음
  // 1. 처음 회원가입을 해서 해싱되지 않은 비밀번호가 들어오거나 (new)
  // 2. 비밀번호 변경을 해서 기존 password와 다를 때
  // 3. password말고 username이나 location이 변경되어 이 pre 로직이 실행될 때
  // 3번 경우 해싱을 할 필요 없으므로 바로 이 로직을 종료함.
  if (!this.isModified('password')) return next();

  try {
    // 패스워드를 해싱해서 저장.
    const hash = await argon2.hash(this.password);
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    const isMatch = await argon2.verify(this.password, password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

userSchema.methods.toJSON = function () {
  // password를 처리하기 위해 메모리에 갖고 있었는데 사용을 다 했으면 바로 지워서
  // 혹시나 API 통신할때나 기타 등등 attacker가 이 password에 접근할 가능성을 차단.
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = model('user', userSchema);
