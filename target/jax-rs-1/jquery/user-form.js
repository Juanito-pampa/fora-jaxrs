const newUser =["name", "email", "sex"];
$.get('http://localhost:8080/jax-rs-1/api/users')
    .then(users=>store.users=users)
    .then(createPage)
    .catch (error=>alert(error))

function createPage() {
    for(let i=0; i<newUser.length; i++){
        ("<div>"+newUser[i]+"</div>"+textarea())
    }
}

function textarea() {
    return `<form>
        <textarea onreset="" placeholder="Enter your" ></textarea>
    </form>`;

}



const template = `<form>
        <textarea onreset="" placeholder="Enter your comment"></textarea>
        <button type="button" class="send-comment">Ok</button>
    </form>`

//"<div>"+ req + "</div>"
//`<div>req</div>`




$.get('http://localhost:8080/jax-rs-1/api/users')
    .then(users=>store.users=users)
    .then(createPage)
    .catch (error=>alert(error))


function createPage() {

    store.users
        .forEach(user => $('body').append(displayUser(user)))
    //$(..) pour les query
    // . quelques chose c'est pour ajax
}

function displayUser() {
    return "<div>Test</div>";

}
