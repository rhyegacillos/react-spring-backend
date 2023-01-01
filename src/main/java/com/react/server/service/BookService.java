package com.react.server.service;

import com.react.server.model.request.BookRequest;
import com.react.server.model.response.BookResponse;

import java.util.List;

public interface BookService {

    BookResponse createBook(BookRequest request);

    BookResponse updateBook(long id, BookRequest request);

    List<BookResponse> getBooks();

    BookResponse getBook(long id);

    void deleteBook(long id);


}
