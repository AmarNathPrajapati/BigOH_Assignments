#include "Book.h"

Book::Book(std::string isbn, std::string title, std::string author)
    : ISBN(isbn), title(title), author(author), rackNumber(-1) {}

BookItem::BookItem(const Book& book, std::string barcode)
    : Book(book), barcode(barcode), status(AVAILABLE), format(HARDCOVER), price(0.0) {
    dateOfPurchase = ""; // In real implementation, set to current date
}
