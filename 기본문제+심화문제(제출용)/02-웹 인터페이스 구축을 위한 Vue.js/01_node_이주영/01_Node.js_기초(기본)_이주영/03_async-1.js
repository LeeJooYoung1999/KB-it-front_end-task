//displayB 함수가2초후에 B를출력하도록완성하세요
//A
//C
//B
function dispalyA(){
    console.log('A');
}
function dispalyB(){
    //2초후에 출력하도록 딜레이 걸어준다. by setTimeout()
    setTimeout(() => {
        console.log('B');
    },2000)  //setTimeout함수의 경우, 숫자1이 1ms을 의미하므로, 2000ms = 1sec
    
}
function dispalyC(){
    console.log('C');
}

dispalyA();
dispalyB();
dispalyC();