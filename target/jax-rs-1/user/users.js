fetch('http://localhost:8080/jax-rs-1/api/users')
    .then(response => response.json())
    .then(users => users.filter(user=>!user.admin))
    .then(users=> users.map(user=> user.name))
    .then(users => users.forEach(dispalyName))
    .catch (error=>alert(error))


function dispalyName(name){

    const li = document.createElement('li');

    li.innerText = name;
    li.appendChild(button)
    document.querySelector("ul").appendChild(li);
}

