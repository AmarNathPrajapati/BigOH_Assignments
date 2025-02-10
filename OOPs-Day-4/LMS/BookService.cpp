#include "BookService.h"
#include <iostream>

void BookService::addBook(std::string title, std::string author, std::string subject, std::string pubDate, std::string isbn) {
    if (books.find(isbn) == books.end()) {
        books[isbn] = new Book(title, author, subject, pubDate, isbn);
        std::cout << "Book added successfully: " << title << std::endl;
    } else {
        std::cout << "Book with ISBN " << isbn << " already exists!" << std::endl;
    }
}

void BookService::addBookItem(std::string isbn, int copyID, int rackNumber) {
    if (books.find(isbn) != books.end()) {
        bookItems.push_back(new BookItem(books[isbn], copyID, rackNumber));
        std::cout << "Book item added successfully. Copy ID: " << copyID << std::endl;
    } else {
        std::cout << "Book with ISBN " << isbn << " does not exist. Please add the book first." << std::endl;
    }
}

bool BookService::isBookAvailable(std::string isbn) {
    for (auto item : bookItems) {
        if (item->getBook()->getISBN() == isbn && item->checkAvailability()) {
            return true;
        }
    }
    return false;
}

std::vector<BookItem*> BookService::searchBooksByTitle(std::string title) {
    std::vector<BookItem*> results;
    for (auto item : bookItems) {
        if (item->getBook()->getTitle() == title) {
            results.push_back(item);
        }
    }
    return results;
}

std::vector<BookItem*> BookService::searchBooksByAuthor(std::string author) {
    std::vector<BookItem*> results;
    for (auto item : bookItems) {
        if (item->getBook()->getAuthor() == author) {
            results.push_back(item);
        }
    }
    return results;
}

std::vector<BookItem*> BookService::searchBooksBySubject(std::string subject) {
    std::vector<BookItem*> results;
    for (auto item : bookItems) {
        if (item->getBook()->getSubject() == subject) {
            results.push_back(item);
        }
    }
    return results;
}

std::vector<BookItem*> BookService::searchBooksByPublicationDate(std::string pubDate) {
    std::vector<BookItem*> results;
    for (auto item : bookItems) {
        if (item->getBook()->getPublicationDate() == pubDate) {
            results.push_back(item);
        }
    }
    return results;
}

void BookService::removeBookItem(int copyID) {
    for (auto it = bookItems.begin(); it != bookItems.end(); ++it) {
        if ((*it)->getCopyID() == copyID) {
            delete *it;
            bookItems.erase(it);
            std::cout << "Book item removed successfully. Copy ID: " << copyID << std::endl;
            return;
        }
    }
    std::cout << "Book item with Copy ID " << copyID << " not found!" << std::endl;
}

void BookService::displayAllBooks() {
    std::cout << "Library Books:\n";
    for (auto item : bookItems) {
        item->displayBookItemInfo();
    }
}
