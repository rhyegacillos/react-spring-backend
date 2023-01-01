package com.react.server.service.media;

import com.react.server.model.entity.media.User;
import com.react.server.model.request.media.UserRequest;
import com.react.server.model.response.media.UserResponse;

import java.util.List;

public interface UserService {

    User addUser(UserRequest request);

    List<User> getUsers();

    void removeUser(long userId);

    User getUser(long userId);
}
