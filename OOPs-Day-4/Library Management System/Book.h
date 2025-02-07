#ifndef BOOK_H
#define BOOK_H

#include <string>
#include <vector>
#include "BookItem.h"

class Book {
private:
    std::string title;
    std::string author;
    std::string subject;
    int publicationYear;
    int bookID;
    std::vector<BookItem> copies; // Collection of BookItems

public:
    Book(int id, const std::string& t, const std::string& a, const std::string& s, int year)
        : bookID(id), title(t), author(a), subject(s), publicationYear(year) {}

    int getBookID() const { return bookID; }
    std::string getTitle() const { return title; }
    std::string getAuthor() const { return author; }
    std::string getSubject() const { return subject; }
    int getPublicationYear() const { return publicationYear; }

    void addBookItem(const BookItem& item) { copies.push_back(item); }

    // Search Functionality
    static bool searchBookByTitle(const std::vector<Book>& books, const std::string& title);
    static bool searchBookByAuthor(const std::vector<Book>& books, const std::string& author);
    static bool searchBookBySubject(const std::vector<Book>& books, const std::string& subject);
    static bool searchBookByPublicationDate(const std::vector<Book>& books, int year);
};
#endif
