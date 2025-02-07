#include <iostream>
#include "ATM.h"

int main()
{
    ATM atm;

    // Top up the ATM
    atm.topUpATM(500, 1);
    atm.topUpATM(100, 10);

    // Display initial balance
    atm.displayBalance();

    // Withdraw money
    // atm.withdrawCash(2300);
    // atm.withdrawCash(700);
    // atm.withdrawCash(450000000);
    atm.withdrawCash(200);

    // Display balance after withdrawal
    atm.displayBalance();

    // Demonetization example
    atm.demonetize(2000, 5000);

    // Display balance after demonetization
    atm.displayBalance();

    return 0;
}
/**
 * to run this code this command will be followed
 * g++ main.cpp ATM.cpp -o atm
 * ./atm.exe
 */