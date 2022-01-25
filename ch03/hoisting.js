console.log(score);//호이스팅 되어서. 에러가 발생하지 않는다.

score = 80;
var score; //자바스크립트는 초기화(undefined) 가 동시에 이루어진다.
//그래서 초기화 신경안쓰는군 이자식덜~~

console.log(score); //값이 할당되어 있다.