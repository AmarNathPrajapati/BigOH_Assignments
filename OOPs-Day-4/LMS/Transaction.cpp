#include "Transaction.h"
#include <iostream>

Transaction::Transaction(string transactionID, Member* member, BookItem* bookItem, string transactionDate) 
    : transactionID(transactionID), member(member), bookItem(bookItem), transactionDate(transactionDate), isReturned(false) {}

void Transaction::displayTransactionDetails() const {
    cout << "Transaction ID: " << transactionID << ", Member: " << member->getName() << ", Book: ";
    bookItem->displayBookItemInfo();
    cout << "Transaction Date: " << transactionDate << ", Returned: " << (isReturned ? "Yes" : "No") << endl;
}

bool Transaction::isBookReturned() const {
    return isReturned;
}

void Transaction::markAsReturned() {
    isReturned = true;
}

string Transaction::getTransactionID() const {
    return transactionID;
}
