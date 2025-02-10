#include "TransactionService.h"

void TransactionService::createTransaction(string transactionID, Member* member, BookItem* bookItem, string transactionDate) {
    if (transactions.find(transactionID) == transactions.end()) {
        transactions[transactionID] = new Transaction(transactionID, member, bookItem, transactionDate);
        std::cout << "Transaction created successfully: " << transactionID << std::endl;
    } else {
        std::cout << "Transaction ID " << transactionID << " already exists!" << std::endl;
    }
}

void TransactionService::markAsReturned(string transactionID) {
    if (transactions.find(transactionID) != transactions.end()) {
        transactions[transactionID]->markAsReturned();
        std::cout << "Transaction marked as returned: " << transactionID << std::endl;
    } else {
        std::cout << "Transaction ID " << transactionID << " not found!" << std::endl;
    }
}

void TransactionService::displayTransactionDetails(string transactionID) {
    if (transactions.find(transactionID) != transactions.end()) {
        transactions[transactionID]->displayTransactionDetails();
    } else {
        std::cout << "Transaction ID " << transactionID << " not found!" << std::endl;
    }
}

void TransactionService::displayAllTransactions() {
    std::cout << "Library Transactions:\n";
    for (auto& transaction : transactions) {
        transaction.second->displayTransactionDetails();
    }
}
