console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function() {
  console.log('dom loaded');

  var submit = document.getElementById('convertValue');
  var textbox = document.getElementById('F');
  var clear = document.getElementById('clear');

  textbox.addEventListener('click', function(event){
    event.preventDefault();
    textbox.value = "";
  });

  submit.addEventListener('click', function(event){
    event.preventDefault();
    var start = document.getElementById('F').value;
    console.log(start);
    var radio = document.querySelector('input[name = "temp"]:checked').value;
    console.log(radio);
       if(radio === 'F'){
        console.log(F);
       var answer = ((start - 32) * 5/9);
     } else{
      console.log("C");
      var answer = ((start * (5/9)) + 32);
     }
    console.log(answer);
    var final = Math.floor(answer);
    console.log(final);
    var print = document.getElementById('printAnsHere');
    print.textContent = final;
  });


clear.addEventListener('click', function(event){
  event.preventDefault();
  var clearValue = document.getElementById('F');
  clearValue.value = "";
});

});
