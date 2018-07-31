function add(number, callback){
  // Mock async behavior
  setTimeout(function (){
    callback(number + 1);
  }, 1000);
}

add(1, function (result1){
  console.log(result1);
});