package com.react.server.model.request.media;

import lombok.Data;

@Data
public class PhotoRequest {

    private String url;

    private long albumId;
}
