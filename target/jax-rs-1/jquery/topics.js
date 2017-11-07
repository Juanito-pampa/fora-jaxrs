const store ={
    topics :[],
    users: []
};

$.get('http://localhost:8080/jax-rs-1/api/topics')
    .then(topics=>store.topics=topics)
    .then(topics=>createPage())
    .catch (error=>alert(error))

function createPage() {

    store.topics
        .map(topic =>topicComponents(topic))
        .forEach(topicComponents => $('body').append(topicComponents))
    //$(..) pour les query
    // . quelques chose c'est pour ajax
}

function topicComponents(topic) {
    return $('<div>')
        .append(titleElement(topic))
        .append(autorElement(topic.user))
        .append(commentsComponents(topic));

}

function autorElement(autor) { //full object
    return $('<div>').addClass('author').text(autor.name);
}

function commentsComponents(topic) {
    return $('<ul>').attr('data-id', topic.id);
}

function titleElement(topic) {

    return $('<h3>')
        .addClass('title')
        .text(topic.title)
        .on('click', event => showComments(topic));
}

function showComments(topic) {

    //deleteAll$
    $('ul+form').remove();
   $('ul').empty().removeClass('expand').addClass('collapse');


    //show
    $(`ul[data-id='${topic.id}']`).removeClass('collapse').addClass('expand');

    topic.comments.forEach(comment => $(`ul[data-id='${topic.id}']`).append(commentElement(comment)));
    createCommentform(topic)



}

function commentElement(comment) {
    return $('<li>').addClass('comments').text(`${comment.user && comment.user.name || "anonymous"} says : ${comment.content}`);

}