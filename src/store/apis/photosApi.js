import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: (result, error, album) => {
    return [{ type: "Photo", id: album.id }];
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints(builder) {
    return {
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
            return [{ type: "Photo", id: photo.id }];
          },
        query: (photo) => {
          return {
            url: `/media/photo/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "AlbumPhotos", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/media/photo",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "AlbumPhotos", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "/media/photo",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
