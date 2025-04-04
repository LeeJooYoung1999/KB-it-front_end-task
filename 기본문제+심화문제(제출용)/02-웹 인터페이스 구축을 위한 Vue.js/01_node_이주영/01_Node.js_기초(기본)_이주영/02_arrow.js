// 다음 함수를 화살표함수로 다시 작성하세요.

// var getTriangle = function (base, height) {
//   return (base * height) / 2;
// };

// let getTriangle = (base, height) => {
//   return (base * height) / 2;
// };

let getTriangle = (base, height) => (base * height) / 2;

console.log('삼각형의 면적 :' + getTriangle(5, 2));
