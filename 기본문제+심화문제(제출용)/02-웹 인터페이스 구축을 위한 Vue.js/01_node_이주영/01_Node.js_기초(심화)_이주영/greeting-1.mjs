//ES 모듈시스템으로 hi와 goodbye를 내보내기하세요.

const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};
const goodbye = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};

export {hi, goodbye};