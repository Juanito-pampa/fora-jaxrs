const store ={
    topics :[],
    users: []
};

$.get('http://localhost:8080/jax-rs-1/api/users')
    .then(users=>store.users=users)
    .catch (error=>alert(error))

$( document ).ready(actionClick)


function actionClick() {
    $("button.send-user").on('click',()=> createUserHandler())
    $("button.mod-user").on('click',()=> modifieUserHandler())
    $("button.del-user").on('click',()=> deleteUserHandler())

}

function createUserHandler() {

    const newUser ={
        name: $("textarea.name").val(),
        email: $("textarea.email").val(),
        male: $("input.sexe").val(),
        admin: $("input.admin").val()
    }
    const url = `../api/users`;
    $.ajax(
        {
            url: url,
            type: "POST",
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(newUser),
            dataType: 'json',
            success: function (response) {
                $("option").remove()
                createLoginBox()
                $("textarea.name").val("")
                $("textarea.email").val("")
            }

        }
    )

}

function modifieUserHandler() {


    let idU = $("select").val()
    let user =store.users.find(user=>user.id === parseInt(idU)  )

    const modUser ={
        id: $("select").val(),
        name: $("textarea.name").val(),
        email: $("textarea.email").val(),
        male: $("input.sexe").val(),
        admin: $("input.admin").val(),
    }
    const url = `../api/users`;
    $.ajax(
        {
            url: url,
            type: "PUT",
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(modUser),
            dataType: 'json',
            success: function (response) {
                $("option").remove()
                createLoginBox()
                $("textarea.name").val("")
                $("textarea.email").val("")
            }

        }
    )

}

function deleteUserHandler() {

    const id = $("select").val()

    const url = `../api/users/${id}`;
    $.ajax(
        {
            url: url,
            type: "DELETE",
            success: function (response) {
                $("option").remove()
                createLoginBox()
            }

        }
    )

}