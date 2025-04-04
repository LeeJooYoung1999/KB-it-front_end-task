// 앞에서작성한 users-1, hello 모듈에서 가져오기해서, 아래와같이출력하세요
// Kim님, 안녕하세요?
// Lee님, 안녕하세요?

const { user1 , user2} = require("./08_users-1");
const hello = require("./06_hello");

hello(user1);
hello(user2);