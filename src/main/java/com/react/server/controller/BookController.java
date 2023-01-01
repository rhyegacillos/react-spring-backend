package com.react.server.controller;

import com.react.server.model.request.BookRequest;
import com.react.server.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping
    public ResponseEntity<?> addBook(@RequestBody BookRequest request) {


        return new ResponseEntity<>(bookService.createBook(request), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBook(@PathVariable("id") long bookId) {

        return new ResponseEntity<>(bookService.getBook(bookId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getBooks() {

        return new ResponseEntity<>(bookService.getBooks(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBook(@PathVariable("id") long bookId, @RequestBody BookRequest request) {

        return new ResponseEntity<>(bookService.updateBook(bookId, request), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable("id") long bookId) {

        bookService.deleteBook(bookId);

        return new ResponseEntity<>("Successfully deleted Book", HttpStatus.OK);
    }
}
