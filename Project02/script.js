const form = document.querySelector('form');
document.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const resultsMessage = document.querySelector('.result-message')
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (height === '' || height < 0 || isNaN(height)) {

        results.innerHTML = 'Please enter valid height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {

        results.innerHTML = 'Please enter valid weight';
    } else {

        results.innerHTML = `<span>${bmi}</span>`
    }

    if (bmi < 18.6) {
        resultsMessage.innerHTML = "Under Weight";
        resultsMessage.className = 'underweight';
    } else if (bmi > 18.6 && bmi < 24.9) {
        resultsMessage.innerHTML = "Normal Weight";
        resultsMessage.className = 'normalweight';
    } else if (bmi > 24.9) {
        resultsMessage.innerHTML = "Over Weight ";
        resultsMessage.className = 'overweight';

    }


})