#ifndef ATM_H
#define ATM_H

#include <iostream>
#include <vector>
#include <algorithm>
#include "Currency.h"

class ATM {
private:
    std::vector<Currency> cashAvailable;

public:
    ATM();

    void topUpATM(int denomination, int count);
    void withdrawCash(int amount);
    void displayBalance();
    void demonetize(int invalidDenomination, int newDenomination);
};

#endif
