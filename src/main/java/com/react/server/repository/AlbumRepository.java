package com.react.server.repository;

import com.react.server.model.entity.media.Album;
import com.react.server.model.entity.media.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {

    List<Album> findAllByUser(User user);
}
