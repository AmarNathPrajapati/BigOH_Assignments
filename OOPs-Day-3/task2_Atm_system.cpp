/**
  Task 2 :
    As described task is:
    You have to create a program for ATM Which would have certain defined denominations of notes : 100 ,200, 500, and 2000 INR.-->Done

    Now you have to design your ATM in such a way that at any time ATM can be top-up with any required domination like I can add 41000 
    as (2000 x 20) + (500 x 2) notes---------------------------------------------------------------->Done

    Your ATM should have a function to withdraw cash , input can be any amount:--------------------->Done

    Use cases for withdraw as below:

    1: if amount is not present show error insufficient balance ------------------------------------>Done

    2: if amount is not in the factor of available denominations show error to ask for multiple of available denomination-------->Done

    3: first largest denomination should be used than smaller : like if I opt for 2300 rs, amount dispatched should be (2000 x 1 ) + (200 x 1) + (100 x 1)------------------------------------------->Done

    3.b: if any denomination is not there like suppose you don’t have 2000 notes left in ATM , then, amount dispatched should be (500 x 4) + (200 x 1) + (100 x 1)-------------------------------------->Done

    Next step: it can be done by Modi Ji, that older denomination is not valid in case of demonetization, like 2000 Notes are banned and new 5000 notes are legal , so you code should be like you don’t need to change much of it,------------->Done

    Try to achieve OOPS , and SOLID principles as much as you can,
    Also, we will add new use cases to see whether your system can adapt to those changes. If Not, then your design is bad. (SOLID,TRY,YAGNI,KISS)
 */
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Currency class to define note properties
class Currency {
    //property of currency
    private:
        int denomination;
        int count;

    public:
        Currency(int denom, int cnt) : denomination(denom), count(cnt) {}

        int getDenomination() const { return denomination; }// only read only fuctions
        int getCount() const { return count; }

        void addNotes(int cnt) { count += cnt; }//adding notes of that currency
        bool deductNotes(int cnt) {
            if (cnt > count) return false;
            count -= cnt;//deducting notes of that currency
            return true;
        }
};

// ATM Class
class ATM {
    private:
        vector<Currency> cashAvailable;

    public:
        // Initializing ATM with default denominations
        ATM() {
            cashAvailable.push_back(Currency(2000, 0));
            cashAvailable.push_back(Currency(500, 0));
            cashAvailable.push_back(Currency(200, 0));
            cashAvailable.push_back(Currency(100, 0));
        }

        // Function to top-up ATM
        void topUpATM(int denomination, int count) {
            for (auto &currency : cashAvailable) {//iterating currency in available cash
                if (currency.getDenomination() == denomination) {//if ATM have already that domination
                    currency.addNotes(count);//adding notes to that dominations
                    cout << "Added " << count << " notes of Rs." << denomination << " to ATM.\n";
                    return;
                }
            }
            cout << "Error: Denomination Rs." << denomination << " not supported!\n";//otherweise denomination not supported.
        }

        // Function to withdraw cash
        void withdrawCash(int amount) {
            vector<pair<int, int>> withdrawal; // Stores denomination and count
            int remainingAmount = amount;

            for (auto &currency : cashAvailable) {//iterating currency available in notes
                int noteValue = currency.getDenomination();//geting value of that currency
                int requiredNotes = remainingAmount / noteValue;//max number of currency required

                if (requiredNotes > 0 && currency.getCount() > 0) {//used maximum number of that currency
                    int usedNotes = min(requiredNotes, currency.getCount());
                    withdrawal.push_back({noteValue, usedNotes});//push value and number of that currency.
                    remainingAmount -= usedNotes * noteValue;//updating the remaining Amount
                }
            }

            if (remainingAmount > 0) {//After complete iteration if remaining Amount exist.
                cout << "Error: Insufficient balance Cannot dispense Rs." << amount << " with available denominations.\n";
                return;
            }

            // Deduct notes after successful withdrawal
            for (auto &withdraw : withdrawal) {//iterating currency'value and number of notes in withdrawal
                for (auto &currency : cashAvailable) {
                    if (currency.getDenomination() == withdraw.first) {
                        currency.deductNotes(withdraw.second);//deducting notes from available cash
                        break;
                    }
                }
            }

            cout << "Withdrawal Successful! Amount Disbursed:\n";
            for (auto &withdraw : withdrawal) {
                cout << withdraw.first << " x " << withdraw.second << " notes\n";
            }
        }

        // Function to display ATM Balance
        void displayBalance() {
            cout << "\nCurrent ATM Balance:\n";
            for (auto &currency : cashAvailable) {//printing available cash 
                cout << "Rs." << currency.getDenomination() << " : " << currency.getCount() << " notes\n";
            }
        }

        // Function to handle demonetization
        void demonetize(int invalidDenomination, int newDenomination) {
            int count = 0;
            for (auto it = cashAvailable.begin(); it != cashAvailable.end(); ++it) {
                if (it->getDenomination() == invalidDenomination) {
                    count = it->getCount();//getting count of demonitize currency
                    cashAvailable.erase(it);
                    break;
                }
            }
            cashAvailable.push_back(Currency(newDenomination, count));//adding that number of new currency
            cout << "Demonetized Rs." << invalidDenomination << " notes. Replaced with Rs." << newDenomination << ".\n";
        }
};

// Main Function
int main() {
    ATM atm;

    // Top up the ATM
    // atm.topUpATM(2000, 20);
    atm.topUpATM(500, 5);
    atm.topUpATM(100, 5);
    atm.topUpATM(200, 5);

    // Display initial balance
    atm.displayBalance();

    // Withdraw money
    atm.withdrawCash(2300);
    atm.withdrawCash(700);
    atm.withdrawCash(450000000);

    // Display balance after withdrawal
    atm.displayBalance();

    // Demonetization example
    atm.demonetize(2000, 5000);

    // Display balance after demonetization
    atm.displayBalance();

    return 0;
}
