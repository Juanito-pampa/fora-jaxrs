fetch ('http://localhost:8080/jax-rs-1/api/topics')
    .then(response => response.json())
    .then(createPage)
    .catch (error=>alert(error))

function createPage(topics) {
    return topics
        .map(topic=>topicComponents(topic))
        .forEach(topicComponents => document.body.appendChild(topicComponents));
}

function topicComponents(topic) {
    const element = document.createElement('div');
    element.appendChild(titleElement(topic));
    element.appendChild(autorElement(topic.user));
    element.appendChild(commentsComponents(topic))
    return element;

}

function autorElement(autor) { //full object
    const element = document.createElement('div');
    element.className ='autor';
    element.innerText=autor.name;
    return element;

}

function commentsComponents(topic) {
    const list = document.createElement('ul')
    list.setAttribute('data-id', topic.id);
    return list;
}

function titleElement(topic) {
    const element = document.createElement('h3');
    element.className ='title';
    element.innerText=topic.title;
    element.addEventListener('click', event => showComments(topic))
    return element;
}

function showComments(topic) {

    //deleteAll
    document.querySelectorAll('ul *').forEach(function(node){
        node.parentNode.removeChild(node)
    })

    document.querySelectorAll('ul').forEach(function(node){
        node.className='collapse'
    })


    //show
    topic.comments.forEach(comment =>document.querySelector(`ul[data-id='${topic.id}']`)
                                            .appendChild(commentElement(comment)))
    document.querySelector(`ul[data-id='${topic.id}']`).className='expand'



}

function commentElement(comment) {
    const element =  document.createElement('li');
    element.className='comments'
    element.innerHTML=comment.content;
    return element

}