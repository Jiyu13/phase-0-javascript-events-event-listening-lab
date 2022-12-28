// copy the code into the index.js file's addingEventListener() function and run the test

function addingEventListener() {
    let input = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!')
    }

    input.addEventListener('click', clickAlert);
}


// call the addingEventListener()
console.log(addingEventListener());