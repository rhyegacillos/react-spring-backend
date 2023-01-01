package com.react.server.service.media;

import com.react.server.model.entity.media.Album;
import com.react.server.model.entity.media.Photo;
import com.react.server.model.request.media.PhotoRequest;
import com.react.server.repository.AlbumRepository;
import com.react.server.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoServiceImpl implements PhotoService{
    @Autowired
    PhotoRepository photoRepository;

    @Autowired
    AlbumService albumService;

    @Override
    public List<Photo> getAlbumPhotos(long albumId) {
        Album getAlbum = albumService.getAlbum(albumId);
        return photoRepository.findAllByAlbum(getAlbum);
    }

    @Override
    public Photo addPhoto(PhotoRequest request) {

        Album getAlbum = albumService.getAlbum(request.getAlbumId());

        Photo newPhoto = new Photo();

        newPhoto.setUrl(request.getUrl());
        newPhoto.setAlbum(getAlbum);
        return photoRepository.save(newPhoto);
    }

    @Override
    public void deletePhoto(long photoId) {

        photoRepository.delete(photoRepository.findById(photoId).get());

    }
}
