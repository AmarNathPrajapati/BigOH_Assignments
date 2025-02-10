#pragma once
#include <string>
#include <vector>

enum BookStatus { AVAILABLE, RESERVED, LOANED };
enum BookFormat { HARDCOVER, PAPERBACK, EBOOK };

class Book {
protected:
    std::string ISBN;
    std::string title;
    std::string author;
    std::string subject;
    std::string publisher;
    std::string publicationDate;
    int rackNumber;

public:
    Book(std::string isbn, std::string title, std::string author);
    virtual ~Book() = default;

    std::string getISBN() const { return ISBN; }
    std::string getTitle() const { return title; }
    std::string getAuthor() const { return author; }
    void setRackNumber(int number) { rackNumber = number; }
};

class BookItem : public Book {
private:
    std::string barcode;
    BookFormat format;
    BookStatus status;
    double price;
    std::string dateOfPurchase;
    std::string dueDate;
    std::string borrowerId;
    bool isOverdue;

public:
    BookItem(const Book& book, std::string barcode);
    void setStatus(BookStatus status) { this->status = status; }
    BookStatus getStatus() const { return status; }
    std::string getBarcode() const { return barcode; }
    void setDueDate(const std::string& date) { dueDate = date; }
    std::string getDueDate() const { return dueDate; }
    void setBorrowerId(const std::string& id) { borrowerId = id; }
    bool checkOverdue() const;
    double calculateFine() const;
};
