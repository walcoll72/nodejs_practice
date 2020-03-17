var fs =require('fs');


var a =function(){
  console.log('A');
};

function slowfunc(callback){
  callback();
}

 slowfunc(a);
