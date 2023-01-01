package com.react.server.controller;

import com.react.server.model.entity.media.Album;
import com.react.server.model.entity.media.Photo;
import com.react.server.model.entity.media.User;
import com.react.server.model.request.media.AlbumRequest;
import com.react.server.model.request.media.PhotoRequest;
import com.react.server.model.request.media.UserRequest;
import com.react.server.model.response.media.AlbumResponse;
import com.react.server.model.response.media.PhotoResponse;
import com.react.server.model.response.media.UserResponse;
import com.react.server.service.media.AlbumService;
import com.react.server.service.media.PhotoService;
import com.react.server.service.media.UserService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/media")
public class MediaController {

    @Autowired
    UserService userService;

    @Autowired
    AlbumService albumService;

    @Autowired
    PhotoService photoService;

    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody UserRequest request) throws InterruptedException {
        User newUser = userService.addUser(request);

        UserResponse response = new UserResponse();
        response.setId(newUser.getId());
        response.setName(newUser.getName());

        Thread.sleep(1000);

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping("/user")
    public ResponseEntity<?> getUsers() throws InterruptedException {
        List<User> users = userService.getUsers();

        List<UserResponse> userList = new ArrayList<>();

        users.forEach(u -> {
            UserResponse response = new UserResponse();
            response.setName(u.getName());
            response.setId(u.getId());

            userList.add(response);
        });

        Thread.sleep(1000);

        return new ResponseEntity<>(userList, HttpStatus.OK);

    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") long userId) {

        userService.removeUser(userId);

        return new ResponseEntity<>("Successfully Deleted", HttpStatus.OK);

    }


    @GetMapping("/album")
    public ResponseEntity<?> getUserAlbum(@RequestParam("userId") long userId) throws InterruptedException {
        List<Album> albums = albumService.getUserAlbums(userId);

        List<AlbumResponse> albumList = new ArrayList<>();

        albums.forEach(a -> {
            AlbumResponse response = new AlbumResponse();
            response.setTitle(a.getTitle());
            response.setUserId(a.getUser().getId());
            response.setId(a.getId());

            albumList.add(response);
        });

        Thread.sleep(1000);

        return new ResponseEntity<>(albumList, HttpStatus.OK);
    }

    @PostMapping("/album")
    public ResponseEntity<?> addAlbum(@RequestBody AlbumRequest request) throws InterruptedException {

        Album album = albumService.addAlbum(request);

        AlbumResponse albumResponse = new AlbumResponse();
        albumResponse.setId(album.getId());
        albumResponse.setTitle(album.getTitle());
        albumResponse.setUserId(album.getUser().getId());

        Thread.sleep(1000);

        return new ResponseEntity<>(albumResponse, HttpStatus.CREATED);

    }

    @DeleteMapping("/album/{albumId}")
    public ResponseEntity<?> deleteAlbum(@PathVariable("albumId") long albumId) throws InterruptedException {
        albumService.deleteAlbum(albumId);

        Thread.sleep(1000);
        return new ResponseEntity<>("Successfully Album Deleted", HttpStatus.OK);
    }

    @GetMapping("/photo")
    public ResponseEntity<?> getAlbumPhotos(@RequestParam("albumId") long albumId) throws InterruptedException {
        List<Photo> photos = photoService.getAlbumPhotos(albumId);

        List<PhotoResponse> photosList = new ArrayList<>();

        photos.forEach(p -> {
            PhotoResponse response = new PhotoResponse();
            response.setUrl(p.getUrl());
            response.setAlbumId(p.getAlbum().getId());
            response.setId(p.getId());

            photosList.add(response);
        });

        Thread.sleep(1000);

        return new ResponseEntity<>(photosList, HttpStatus.OK);
    }

    @PostMapping("/photo")
    public ResponseEntity<?> addPhoto(@RequestBody PhotoRequest request) throws InterruptedException {

        Photo photo = photoService.addPhoto(request);

        PhotoResponse photoResponse = new PhotoResponse();
        photoResponse.setId(photo.getId());
        photoResponse.setUrl(photo.getUrl());
        photoResponse.setAlbumId(photo.getAlbum().getId());

        Thread.sleep(1000);

        return new ResponseEntity<>(photoResponse, HttpStatus.CREATED);

    }

    @DeleteMapping("/photo/{photoId}")
    public ResponseEntity<?> deletePhoto(@PathVariable("photoId") long photoId) throws InterruptedException {
        photoService.deletePhoto(photoId);

        Thread.sleep(1000);
        return new ResponseEntity<>("Successfully Photo Deleted", HttpStatus.OK);
    }
}
