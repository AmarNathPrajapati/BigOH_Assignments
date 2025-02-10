#include "Fine.h"
#include <iostream>

Fine::Fine(Member* member, double fineAmount, string fineDate)
    : member(member), fineAmount(fineAmount), fineDate(fineDate) {}

void Fine::displayFineDetails() const {
    cout << "Fine for Member: " << member->getName() << ", Fine Amount: " << fineAmount << ", Date: " << fineDate << endl;
}

void Fine::applyFine(double amount) {
    fineAmount += amount;
}

double Fine::getFineAmount() const {
    return fineAmount;
}

Member* Fine::getMember() const {
    return member;
}
