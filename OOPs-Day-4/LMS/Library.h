#pragma once
#include <vector>
#include <map>
#include "User.h"

class Library {
private:
    std::vector<Book*> books;
    std::vector<BookItem*> bookItems;
    std::vector<Member*> members;
    std::vector<Librarian*> librarians;
    std::map<std::string, std::vector<Member*>> bookReservations;

    static const int MAX_BOOKS_PER_USER = 5;
    static const int MAX_LENDING_DAYS = 10;
    static const double FINE_PER_DAY = 1.0;

    void checkAndUpdateOverdueItems();
    void processReservations(BookItem* book);

public:
    Library();
    ~Library();

    std::vector<Book*> searchByTitle(const std::string& title);
    std::vector<Book*> searchByAuthor(const std::string& author);
    std::vector<Book*> searchBySubject(const std::string& subject);
    std::vector<Book*> searchByPublicationDate(const std::string& date);

    bool addMember(Member* member);
    bool cancelMembership(Member* member);
    bool issueFine(Member* member, double amount);
    void sendNotification(Member* member, const std::string& message);

    bool addBook(Book* book);
    bool addBookItem(BookItem* bookItem);
    bool removeBookItem(const std::string& barcode);
    std::vector<BookItem*> getCheckedOutBooks(const std::string& memberId);
    std::vector<BookItem*> getReservedBooks(const std::string& memberId);
    void notifyDueDate();
    void notifyReservationAvailable(Member* member, BookItem* book);
    double calculateFine(const std::string& memberId);
};
