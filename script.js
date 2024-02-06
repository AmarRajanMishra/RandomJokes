let jokesBtn = document.getElementById('jokesBtn')
jokesBtn.addEventListener('click', generateNewJokes)

function generateNewJokes(){
    let url = 'https://api.chucknorris.io/jokes/random'
    // console.log(url)
    // Fetch method always return 2 promise
    // Promise - If we get response successfully then 
    // promise return resolve otherwise return reject
    fetch(url)
    .then(res => res.json()) // After getting the response we need parse in json to convert in Object Formate
    .then(res => {  // After getting final data we can access the response to anywhere inside docuement
        let jokesSection = document.getElementById('jokeSection')
        // Here we are selecting the tag where i want to print the data
        // After that write the response
        jokesSection.innerHTML = `
        <h1 class="heading">New jokes</h1>
        <p class="jokes"> ${res.value}
        `
    })
}



