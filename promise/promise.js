function add(number, callback){
  return new Promise(function(resolve, reject) {
    if (number > 4){
      reject('You cannot have more than 4');
      setTimeout(function (){
    }
      resolve(number + 1);
    }, 1000);
  });
}

add(1)
  .then(function(result){
    console.log(result);
  });