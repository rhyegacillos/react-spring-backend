package com.react.server.service.media;

import com.react.server.model.entity.media.User;
import com.react.server.model.request.media.UserRequest;
import com.react.server.model.response.media.UserResponse;
import com.react.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(UserRequest request) {

        User newUser = new User();
        newUser.setName(request.getName());

        return  userRepository.save(newUser);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void removeUser(long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public User getUser(long userId) {
        return userRepository.findById(userId).get();
    }
}
