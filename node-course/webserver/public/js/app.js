console.log('Client side javascript is loaded');
console.log('Client side javascript is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#msg');

msg1.textContent = 'Loading the value';

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
fetch('http://localhost:3000/weather?address=Boston').then((response) => {
  response.json().then((data) => {
    if(data.error){
      console.log('error');
    }else{
      console.log('location:India');
    }
    console.log(data);
  });
});



weatherForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const location = search.value;

  console.log(location);
  // console.log('testing');
});