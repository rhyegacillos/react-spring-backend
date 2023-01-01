package com.react.server.service;

import com.react.server.model.entity.Book;
import com.react.server.model.request.BookRequest;
import com.react.server.model.response.BookResponse;
import com.react.server.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    BookRepository bookRepository;

    @Override
    public BookResponse createBook(BookRequest request) {
        Book newBook = new Book();
        newBook.setTitle(request.getTitle());

        Book savedBook = bookRepository.save(newBook);

        BookResponse bookResponse = new BookResponse();

        bookResponse.setId(savedBook.getId());
        bookResponse.setTitle(savedBook.getTitle());

        return bookResponse;
    }

    @Override
    public BookResponse updateBook(long id, BookRequest request) {

        Optional<Book> updateBook = bookRepository.findById(id);

        if (updateBook.isPresent()) {
            updateBook.get().setTitle(request.getTitle());

            Book savedBook = bookRepository.save(updateBook.get());

            BookResponse bookResponse = new BookResponse();

            bookResponse.setId(savedBook.getId());
            bookResponse.setTitle(savedBook.getTitle());

            return bookResponse;
        }

        return new BookResponse();
    }

    @Override
    public List<BookResponse> getBooks() {
        List<Book> getBooks = bookRepository.findAll();

        List<BookResponse> bookResponses = new ArrayList<>();

        getBooks.forEach(b -> {
            BookResponse bookResponse = new BookResponse();
            bookResponse.setId(b.getId());
            bookResponse.setTitle(b.getTitle());

            bookResponses.add(bookResponse);
        });

        return bookResponses;
    }

    @Override
    public BookResponse getBook(long id) {

        Optional<Book> getBook = bookRepository.findById(id);

        if (getBook.isPresent()) {
            BookResponse bookResponse = new BookResponse();
            bookResponse.setId(getBook.get().getId());
            bookResponse.setTitle(getBook.get().getTitle());

            return bookResponse;
        }
        return null;
    }

    @Override
    public void deleteBook(long id) {
        bookRepository.deleteById(id);

    }
}
