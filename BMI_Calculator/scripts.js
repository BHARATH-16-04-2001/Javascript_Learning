const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give Valid Height..${height}`
  }
  else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give Valid Weight..${weight}`
  }
  else{
    var bmi = (weight / ((height * height)/10000)).toFixed(3)
    results.innerHTML = `<span> ${bmi} </span>`;
  }

  if(bmi < 18.6){
    console.log(`${bmi} Under Weight Please eat some Protein food..`);
    results.innerHTML = `${bmi} Under Weight Please eat some Protein food..`
  }
  else if(bmi >= 18.6 && bmi <= 24.9){
    console.log(`${bmi} Normal Weight`);
    results.innerHTML = `${bmi} Normal Weight`
  }
  else{
    console.log(`${bmi} Over Weight`);
    results.innerHTML = `${bmi} Over Weight`
    
  }
  
})