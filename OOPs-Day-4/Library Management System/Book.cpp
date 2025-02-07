#include "Book.h"
#include <iostream>

// Search Functions
bool Book::searchBookByTitle(const std::vector<Book>& books, const std::string& title) {
    for (const auto& book : books) {
        if (book.getTitle() == title) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookByAuthor(const std::vector<Book>& books, const std::string& author) {
    for (const auto& book : books) {
        if (book.getAuthor() == author) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookBySubject(const std::vector<Book>& books, const std::string& subject) {
    for (const auto& book : books) {
        if (book.getSubject() == subject) {
            return true;
        }
    }
    return false;
}

bool Book::searchBookByPublicationDate(const std::vector<Book>& books, int year) {
    for (const auto& book : books) {
        if (book.getPublicationYear() == year) {
            return true;
        }
    }
    return false;
}

void Book::addBookItem(const BookItem& item) {
    copies.push_back(item);
}
