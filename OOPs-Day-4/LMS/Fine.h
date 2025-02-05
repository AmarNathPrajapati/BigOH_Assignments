#ifndef FINE_H
#define FINE_H

#include "Member.h"
#include <iostream>
using namespace std;

class Fine {
private:
    double fineAmount;
    Member* member;
    string fineDate;

public:
    Fine(Member* member, double fineAmount, string fineDate);
    void displayFineDetails() const;
    void applyFine(double amount);
    double getFineAmount() const;
    Member* getMember() const;
};

#endif
