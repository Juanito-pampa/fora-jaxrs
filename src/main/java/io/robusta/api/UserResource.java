package io.robusta.api;

import io.robusta.ForaDataSource;
import io.robusta.business.UserBusiness;
import io.robusta.domain.User;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

	@GET
	public List<User> getUsers(){
		return new UserBusiness().findAll();
	}

	@GET
	@Path("{id}")
	public User findUserById(@PathParam("id") Long id) {
		User user = new UserBusiness().findById(id);
		return user;
	}

	@POST
	public Response createUser (User user) {
		if(user.getName().length()<1)
			throw new NotAcceptableException("no name");
		if(user.getEmail().length()<1)
			throw new NotAcceptableException("no email");
		User result = new UserBusiness()
				.createUser(user.getEmail(),user.getName(), user.isAdmin(), user.isMale());
		return Response.ok(result).build();
	}

	@PUT
	public void modifieUser (User user) {
		UserBusiness biz = new UserBusiness();
		biz.updateUser(user);

	}

	@DELETE
	@Path("{id}")
	public void deleteUser (@PathParam("id") Long id) {
		User user = new UserBusiness().findById(id);
		UserBusiness biz = new UserBusiness();
		biz.deleteUser(user);
	}



}
