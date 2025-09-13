// const height = document.getElementById('#height');
// const weight = document.getElementById('#weight');
// const output = document.getElementById('#num')

// let submit =  document.getElementById('#button');

// let res = submit.addEventListener('click', function(){
//     let h = parseFloat(height.value);
//     let w = parseFloat(weight.value);

//     let r = h + w;
//     output.innerHTML = r;

// });




const height = document.getElementById('height');
const weight = document.getElementById('weight');
const output = document.getElementById('num');
const submit = document.getElementById('button');

submit.addEventListener('click', function () {

    let h = parseInt(height.value);
    let w = parseInt(weight.value);

    let result = w/(h*h)
    output.innerHTML = result.toFixed(2);;
});
