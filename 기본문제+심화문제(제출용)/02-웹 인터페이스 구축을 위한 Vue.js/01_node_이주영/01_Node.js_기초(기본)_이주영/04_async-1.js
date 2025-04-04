//displayB 함수가2초후에B를출력하도록완성하세요
//콜백을 이용하여 다음과같이 출력되도록 displayB 함수를 완성하세요.
//A
//(2초경과후)
//B
//C
function dispalyA(){
    console.log('A');
}
function dispalyB(callback){
    //2초후에 출력하도록 딜레이 걸어준다. by setTimeout()
    setTimeout(() => {
        console.log('B');
        callback
    },2000)  //setTimeout함수의 경우, 숫자1이 1ms을 의미하므로, 2000ms = 1sec
    
}
function dispalyC(){
    console.log('C');
}

dispalyA();
dispalyB(dispalyC);