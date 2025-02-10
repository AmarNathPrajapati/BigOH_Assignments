#ifndef BOOKSERVICE_H
#define BOOKSERVICE_H

#include <vector>
#include <unordered_map>
#include "Book.h"
#include "BookItem.h"

class BookService {
private:
    std::unordered_map<std::string, Book*> books;  // ISBN -> Book
    std::vector<BookItem*> bookItems;  // List of all book copies

public:
    void addBook(std::string title, std::string author, std::string subject, std::string pubDate, std::string isbn);
    void addBookItem(std::string isbn, int copyID, int rackNumber);
    bool isBookAvailable(std::string isbn);
    std::vector<BookItem*> searchBooksByTitle(std::string title);
    std::vector<BookItem*> searchBooksByAuthor(std::string author);
    std::vector<BookItem*> searchBooksBySubject(std::string subject);
    std::vector<BookItem*> searchBooksByPublicationDate(std::string pubDate);
    void removeBookItem(int copyID);
    void displayAllBooks();
};

#endif
