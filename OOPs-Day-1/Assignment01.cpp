#include<iostream>
#include<vector>
using namespace std;

// Driver Class
class Driver {
private:
    string name;
    int experience;  // Experience in years

public:
    Driver(string name, int exp) {
        this->name = name;
        this->experience = exp;
    }

    string getName() {
        return name;
    }

    int getExperience() {
        return experience;
    }
};

// Base Class: MP
class MP {
protected:
    string name;
    string constituency;
    vector<Driver> drivers;  // Now storing multiple Driver objects
    int spendingLimit;
    int expense;

public:
    MP(string name, string constituency, Driver driver, int limit) {
        this->name = name;
        this->constituency = constituency;
        this->drivers.push_back(driver);
        this->spendingLimit = limit;
        expense = 0;
    }

    string getName() {
        return name;
    }

    string getConstituency() {
        return constituency;
    }

    vector<Driver> getDrivers() {
        return drivers;
    }

    void addDriver(Driver driver) {
        drivers.push_back(driver);
    }

    void addExpense(int amount) {
        expense += amount;
    }

    bool exceedsSpendingLimit() {
        return expense > spendingLimit;
    }

    virtual bool isPM() {
        return false;
    }
};

// Derived Class: Minister
class Minister : public MP {
public:
    Minister(string name, string constituency, Driver driver) : MP(name, constituency, driver, 1000000) {}
};

// Derived Class: PM
class PM : public Minister {
private:
    vector<string> specialBenefits;

public:
    PM(string name, string constituency, Driver driver) : Minister(name, constituency, driver) {
        spendingLimit = 10000000;
        specialBenefits = {"Aircraft", "Car"};
    }

    bool isPM() override {
        return true;
    }
};

// Commissioner Class
class Commissioner {
public:
    bool canArrest(MP &mp, bool pmPermission = false) {
        if (mp.isPM()) {
            return false;  // PM cannot be arrested
        }
        if (dynamic_cast<Minister*>(&mp) && !pmPermission) {
            return false; // Minister needs PM permission
        }
        return mp.exceedsSpendingLimit();
    }
};

// Main Function
int main() {
    Driver d1("Driver A", 5);
    Driver d2("Driver B", 10);
    Driver d3("PM's Primary Driver", 15);

    MP mp1("Mr Babu Singh Kushawaha", "Jaunpur-73", d1, 100000);
    Minister minister1("Mr Ashwini Vaishnaw", "Odisha", d2);
    PM pm("Mr Narendra Modi", "Varanasi", d3);

    // Adding more drivers
    mp1.addDriver(Driver("Driver A2", 7));
    minister1.addDriver(Driver("Driver B2", 12));
    pm.addDriver(Driver("PM's Security Driver", 20));

    Commissioner commissioner;

    // Adding expenses
    mp1.addExpense(10000);
    mp1.addExpense(95000);
    minister1.addExpense(200000);
    minister1.addExpense(900000);

    // Checking Arrest
    bool mp1Arrested = commissioner.canArrest(mp1);
    bool minister1Arrested = commissioner.canArrest(minister1, true);
    bool pmArrested = commissioner.canArrest(pm);

    // Printing Results
    cout << mp1.getName() << " MP of " << mp1.getConstituency() << " Arrested: " << (mp1Arrested ? "Yes" : "No") << endl;
    cout << minister1.getName() << " MP of " << minister1.getConstituency() << " Arrested: " << (minister1Arrested ? "Yes" : "No") << endl;
    cout << pm.getName() << " Arrested: " << (pmArrested ? "Yes" : "No") << endl;

    // Printing Drivers with Experience
    cout << "\nDrivers assigned to " << mp1.getName() << ": ";
    for (Driver d : mp1.getDrivers()) cout << d.getName() << " (" << d.getExperience() << " yrs), ";

    cout << "\nDrivers assigned to " << minister1.getName() << ": ";
    for (Driver d : minister1.getDrivers()) cout << d.getName() << " (" << d.getExperience() << " yrs), ";

    cout << "\nDrivers assigned to " << pm.getName() << ": ";
    for (Driver d : pm.getDrivers()) cout << d.getName() << " (" << d.getExperience() << " yrs), ";

    return 0;
}
