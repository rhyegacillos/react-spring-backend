package com.react.server.model.entity.media;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Photo {

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String url;

    @ManyToOne
    private Album album;
}
