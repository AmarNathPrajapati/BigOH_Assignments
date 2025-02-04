#ifndef MEMBER_H
#define MEMBER_H

#include <iostream>
#include <vector>
#include "Book.h"
#include "FineService.h"
#include "Utils.h"

using namespace std;

class Member {
private:
    string name;
    string memberId;
    vector<pair<Book*, int>> borrowedBooks; // Stores book and issue date

public:
    Member(string name, string id);
    
    void borrowBook(Book* book);
    void returnBook(string isbn);
    void displayBorrowedBooks();
    
    string getMemberId() const;  
};

#endif
