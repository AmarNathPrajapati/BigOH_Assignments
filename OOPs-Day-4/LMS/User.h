#pragma once
#include <string>
#include <vector>
#include "Book.h"

class User {
protected:
    std::string name;
    std::string email;
    std::string phoneNumber;

public:
    User(std::string name, std::string email);
    virtual ~User() = default;
    std::string getName() const { return name; }
};

class Member : public User {
private:
    std::string memberId;
    std::string barcode;
    std::vector<BookItem*> checkedOutBooks;
    std::vector<BookItem*> reservedBooks;

public:
    Member(std::string name, std::string email, std::string memberId);
    bool checkoutBook(BookItem* book);
    bool returnBook(BookItem* book);
    bool reserveBook(BookItem* book);
    bool cancelReservation(BookItem* book);
    int getCheckedOutBooksCount() const { return checkedOutBooks.size(); }
};

class Librarian : public User {
private:
    std::string staffId;
    std::string department;

public:
    Librarian(std::string name, std::string email, std::string staffId);
    bool addBook(Book* book);
    bool removeBook(Book* book);
    bool modifyBook(Book* book);
};
