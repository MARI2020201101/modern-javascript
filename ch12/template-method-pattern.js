function repeat(i, f){
    for(var n = 0 ; n< i ;n++) {
        f();
    }
}

function printLog(){
    console.log('hello');
}

repeat(5, printLog);

function printName(){
    console.log('mari');
}

repeat(5, printName);

