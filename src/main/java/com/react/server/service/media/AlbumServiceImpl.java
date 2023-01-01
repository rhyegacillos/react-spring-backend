package com.react.server.service.media;

import com.react.server.model.entity.media.Album;
import com.react.server.model.entity.media.User;
import com.react.server.model.request.media.AlbumRequest;
import com.react.server.repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumServiceImpl implements AlbumService{

    @Autowired
    UserService userService;

    @Autowired
    AlbumRepository albumRepository;

    @Override
    public List<Album> getUserAlbums(long userId) {
        User user = userService.getUser(userId);
        return albumRepository.findAllByUser(user);
    }

    @Override
    public Album addAlbum(AlbumRequest request) {
        User user = userService.getUser(request.getUserId());

        Album newAlbum = new Album();
        newAlbum.setTitle(request.getTitle());
        newAlbum.setUser(user);
        return albumRepository.save(newAlbum);
    }

    @Override
    public void deleteAlbum(long albumId) {
        albumRepository.delete(albumRepository.findById(albumId).get());
    }

    @Override
    public Album getAlbum(long albumId) {
        return albumRepository.findById(albumId).get();
    }
}
