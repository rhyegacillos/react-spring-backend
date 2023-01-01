package com.react.server.service.media;

import com.react.server.model.entity.media.Photo;
import com.react.server.model.request.media.PhotoRequest;

import java.util.List;

public interface PhotoService {

    List<Photo> getAlbumPhotos(long albumId);

    Photo addPhoto(PhotoRequest request);

    void deletePhoto(long photoId);
}
