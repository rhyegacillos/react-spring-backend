package com.react.server.model.entity.media;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Album {

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
    List<Photo> photos;
}
