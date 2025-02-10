#ifndef TRANSACTION_H
#define TRANSACTION_H

#include "Member.h"
#include "BookItem.h"
#include <iostream>
#include <string>
using namespace std;

class Transaction {
private:
    string transactionID;
    Member* member;
    BookItem* bookItem;
    string transactionDate;
    bool isReturned;

public:
    Transaction(string transactionID, Member* member, BookItem* bookItem, string transactionDate);
    void displayTransactionDetails() const;
    bool isBookReturned() const;
    void markAsReturned();
    string getTransactionID() const;
};

#endif
