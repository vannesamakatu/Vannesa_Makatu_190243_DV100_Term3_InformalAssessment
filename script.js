console.log('hello there')

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "-5DU4n02mPK71Kv8PXCrjgd7JjfpsBJUJwGAOGu0wZwh8Th7iz");
myHeaders.append("x-apihub-host", "Jokes-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "fba849ca-2257-445d-b5e2-ba6ce527a281");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};


function fetchJoke() {
    fetch("https://Jokes-API.proxy-production.allthingsdev.co/random_joke", requestOptions)
        .then(response => response.json()) 
        .then(result => {
            console.log(result); 
           
            document.getElementById("joke-setup").textContent = result.setup;
            document.getElementById("joke-punchline").textContent = result.punchline;
        })
        .catch(error => console.error('Error:', error));
}


fetchJoke();


document.getElementById("new-joke").addEventListener("click", fetchJoke);
