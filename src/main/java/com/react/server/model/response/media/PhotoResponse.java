package com.react.server.model.response.media;

import lombok.Data;

@Data
public class PhotoResponse {

    private long id;

    private String url;

    private long albumId;
}
