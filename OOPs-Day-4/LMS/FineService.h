#ifndef FINESERVICE_H
#define FINESERVICE_H

#include <iostream>
#include <unordered_map>
#include "Fine.h"

class FineService {
private:
    unordered_map<int, Fine*> fines; // MemberID -> Fine Object

public:
    void applyFine(int memberID, double amount, string fineDate);
    void displayFineDetails(int memberID);
    void clearFine(int memberID);
    void displayAllFines();
};

#endif
