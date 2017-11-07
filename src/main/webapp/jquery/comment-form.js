const template = `<form>
        <textarea onreset="" placeholder="Enter your comment"></textarea>
        <button type="button" class="send-comment">Ok</button>
    </form>`

function createCommentform(topic) {
    $(`ul[data-id='${topic.id}']`)
        .after(template);
    $('button.send-comment').on('click',()=> createCommentHandler(topic));
}

function createCommentHandler(topic) {
        const comment = {
            id: "coucou",
            content: $("textarea.name").val(),
            user: {
                id: $("form.login.select").val(),
                name:"",
                email: "toto@gmail.com",
                male: true,
                admin: false,
            }
        }
        const url = `../api/topics/${topic.id}/comments`;
        $.ajax(
            {
                url: url,
                type: "POST",
                contentType:'application/json; charset=utf-8',
                data: JSON.stringify(comment),
                dataType: 'json',
                success: function (response) {
                    $(`ul[data-id='${topic.id}']`).append(commentElement(comment))
                }
            }
        )

}

