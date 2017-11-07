
$(document).ready(createLoginBox)

function  createLoginBox() {
    let idU
    let user
    $.get('../api/users')
        .then(users=>users.map(user=>`<option value="${user.id}">${user.name}</option>option>`))
        .then(options => $("select").append(options.join('\n')))
        .then(idU = $("select").val())
        .then(user =store.users.find(user=>user.id === parseInt(idU)  ))
        .then($("textarea.name").val(user.name))

}