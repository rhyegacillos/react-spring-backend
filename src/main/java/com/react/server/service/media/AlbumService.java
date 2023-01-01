package com.react.server.service.media;

import com.react.server.model.entity.media.Album;
import com.react.server.model.request.media.AlbumRequest;

import java.util.List;

public interface AlbumService {

    List<Album> getUserAlbums(long userId);

    Album addAlbum(AlbumRequest request);

    void deleteAlbum(long albumId);

    Album getAlbum(long albumId);
}
