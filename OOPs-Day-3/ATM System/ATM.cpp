#include "ATM.h"

ATM::ATM() {
    cashAvailable.push_back(Currency(2000, 0));
    cashAvailable.push_back(Currency(500, 0));
    cashAvailable.push_back(Currency(200, 0));
    cashAvailable.push_back(Currency(100, 0));
}

void ATM::topUpATM(int denomination, int count) {
    for (auto &currency : cashAvailable) {
        if (currency.getDenomination() == denomination) {
            currency.addNotes(count);
            std::cout << "Added " << count << " notes of Rs." << denomination << " to ATM.\n";
            return;
        }
    }
    std::cout << "Error: Denomination Rs." << denomination << " not supported!\n";
}

void ATM::withdrawCash(int amount) {
    std::vector<std::pair<int, int>> withdrawal;
    int remainingAmount = amount;

    for (auto &currency : cashAvailable) {
        int noteValue = currency.getDenomination();
        int requiredNotes = remainingAmount / noteValue;

        if (requiredNotes > 0 && currency.getCount() > 0) {
            int usedNotes = std::min(requiredNotes, currency.getCount());
            withdrawal.push_back({noteValue, usedNotes});
            remainingAmount -= usedNotes * noteValue;
        }
    }

    if (remainingAmount > 0) {
        std::cout << "Error: Insufficient balance or invalid amount Rs." << amount << ".\n";
        return;
    }

    for (auto &withdraw : withdrawal) {
        for (auto &currency : cashAvailable) {
            if (currency.getDenomination() == withdraw.first) {
                currency.deductNotes(withdraw.second);
                break;
            }
        }
    }

    std::cout << "Withdrawal Successful! Amount Disbursed:\n";
    for (auto &withdraw : withdrawal) {
        std::cout << withdraw.first << " x " << withdraw.second << " notes\n";
    }
}

void ATM::displayBalance() {
    std::cout << "\nCurrent ATM Balance:\n";
    for (auto &currency : cashAvailable) {
        std::cout << "Rs." << currency.getDenomination() << " : " << currency.getCount() << " notes\n";
    }
}

void ATM::demonetize(int invalidDenomination, int newDenomination) {
    int count = 0;
    for (auto it = cashAvailable.begin(); it != cashAvailable.end(); ++it) {
        if (it->getDenomination() == invalidDenomination) {
            count = it->getCount();
            cashAvailable.erase(it);
            break;
        }
    }
    cashAvailable.push_back(Currency(newDenomination, count));
    std::cout << "Demonetized Rs." << invalidDenomination << " notes. Replaced with Rs." << newDenomination << ".\n";
}
