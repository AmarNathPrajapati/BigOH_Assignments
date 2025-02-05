#ifndef LIBRARIANSERVICE_H
#define LIBRARIANSERVICE_H

#include <iostream>
#include <unordered_map>
#include "Librarian.h"

class LibrarianService {
private:
    unordered_map<string, Book*> books;     // ISBN -> Book
    unordered_map<int, Member*> members;   // MemberID -> Member

public:
    void addBook(string isbn, string title, string author, string subject, string pubDate);
    void removeBook(string isbn);
    void editBook(string isbn, string newTitle, string newAuthor);
    void registerMember(int memberID, string name, string email);
    void unregisterMember(int memberID);
    void displayAllBooks();
    void displayAllMembers();
};

#endif
