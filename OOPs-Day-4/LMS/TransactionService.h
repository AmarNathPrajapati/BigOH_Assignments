#ifndef TRANSACTIONSERVICE_H
#define TRANSACTIONSERVICE_H

#include <iostream>
#include <unordered_map>
#include "Transaction.h"

class TransactionService {
private:
    unordered_map<string, Transaction*> transactions; // TransactionID -> Transaction Object

public:
    void createTransaction(string transactionID, Member* member, BookItem* bookItem, string transactionDate);
    void markAsReturned(string transactionID);
    void displayTransactionDetails(string transactionID);
    void displayAllTransactions();
};

#endif
