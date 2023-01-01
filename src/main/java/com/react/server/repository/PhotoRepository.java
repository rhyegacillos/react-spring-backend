package com.react.server.repository;

import com.react.server.model.entity.media.Album;
import com.react.server.model.entity.media.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {

    List<Photo> findAllByAlbum(Album album);
}
