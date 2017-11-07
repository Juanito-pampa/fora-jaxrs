package io.robusta.api;

import io.robusta.demo.UserDemoResource;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("api")
public class ApiApplication extends Application
{
    @Override
    public Set<Class<?>> getClasses() {

        Set<Class<?>> s = new HashSet<Class<?>>();
        s.add(UserResource.class);
        s.add(TopicRessource.class);
        return s;
    }


}
