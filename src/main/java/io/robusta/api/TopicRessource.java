package io.robusta.api;

import io.robusta.business.CommentBusiness;
import io.robusta.business.TopicBusiness;
import io.robusta.domain.Comment;
import io.robusta.domain.Topic;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("topics")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TopicRessource {


    @GET
    public List<Topic> getTopics(){
        return new TopicBusiness().getAllTopics();
    }


    @POST
    @Path("{id}/comments")
    public Response createComment (@PathParam("id") long topicId, Comment comment){
        if(comment.getContent().length()<1)
            throw new NotAcceptableException("no user");

        if(comment.getUser()==null)
            throw new NotAcceptableException("no content");
        Topic topic = new  TopicBusiness().getTopicById(topicId);
        Comment result = new CommentBusiness()
            .createComment(topic, comment.getContent(),comment.getUser(),  false);

        return Response.ok(result).build();
    }

    @PUT
    @Path("comments/{com}/{id}")
    public void  modifyScoreComment(@PathParam("com") int com,@PathParam ("id") String commentId){
        Comment result = new CommentBusiness().getCommentById(commentId);
        if(com==0)
            result.up();
        result.down();
    }


}
