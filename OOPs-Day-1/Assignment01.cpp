
/*
    Task 1 :

    Write a program to depict Indian Politics.

    Consider the politics use cases :

    MP: is a person who won from a constituency  -------------------------------------------------------------->Done

    getConstituency - return their winning constituency.------------------------------------------------------->Done

    getDriver - returns the driver assigned for their vehicle (default car).----------------------------------->Done

    exceedsSpendingLimit - returns true or false if Mps exceeds to their spending limit.----------------------->Done



    PM->Ministers->MP (All of them are MPS) - PM has special permissions such as it can give permission to arrest any minister.
    PM enjoys special benefits such as Aircraft (along with car) and its designated driver.----------------------->Done


    Note: PM spending limit : 1 crore, Ministers: 10 lakhs, MP: 1 lakh.------------------------------------=------>Done

    Need to design in a way  where Commisioner class can arrest MP, Ministers and PM when their expense exceeds 
    their spending limit:--------------------------------------------------------------------->Done


    canArrest - can arrest one or many MP.  
            Note:   If PM  cant arrest.
                    If minister can arrest with PM permission
                    if mps they can be arrested without anyones permission.
    In Short, If the MP is not PM then he can be arrested by commisoner , 
    If he is minister then can be arrested with PMs permisison.-------------------------------->Done

*/


#include<iostream>
#include<vector>
using namespace std;
// using namespace std;

// Base Class: MP
class MP {
    protected:
        string name;
        string constituency;
        string driver;
        int spendingLimit;
        int expense;

    public:
        //initializing name, constituency, driver and limit and other attributes of MP
        MP(string name, string constituency, string driver, int limit){
            this->name = name;
            this->constituency = constituency;
            this->driver = driver;
            this->spendingLimit = limit;
            expense = 0;
        }
        //Getter functions for the name constituency and driver
        string getName(){
            return name;
        }
        string getConstituency(){
            return constituency;
        }
        string getDriver(){
            return driver;
        }
        //calculating the expense
        void addExpense(int amount){
                 expense += amount;
        }
        //checking spending limit
        bool exceedsSpendingLimit(){
            return expense>spendingLimit;
        } 
        virtual bool isPM(){
            return false;
        }
};

// Derived Class: Minister inherits MP
class Minister : public MP {
public:
    //Initialize minister attributes
    Minister(string name, string getConstituency, string driver): MP(name, constituency, driver, 1000000) {}
};

// Derived Class: PM inherits Minister
class PM : public Minister {
    private:
        string pmDriver;
        vector<string> specialBenifits;

    public:
       
        PM(string name, string constituency): Minister(name, constituency, "Marappa"){
            spendingLimit = 10000000;
            specialBenifits = {"Aircraft","Car"};
        }
        string getDriver(){
            return pmDriver;
        }
        bool isPM()override {
            return true;
        }
};

// Commissioner Class
class Commissioner {
public:
    bool canArrest(MP &mp, bool pmPermission = false){
        if(mp.isPM()){
            return false; //PM cannot be arrested
        }
        if(dynamic_cast<Minister*> (&mp) && !pmPermission){
            return false;
        }
        return mp.exceedsSpendingLimit();
    }
};

// Main Function to Test the Implementation
int main() {
    MP mp1("Mr Babu Singh Kushawaha", "Jaunpur-73", "Driver A", 100000);
    Minister minister1("Mr Ashwini Vaishnaw", "Odisha", "Driver B");
    PM pm("Mr Narendra Modi", "Varanasi");

    Commissioner commissioner;
    
    //mp1 expense
    mp1.addExpense(10000); 
    mp1.addExpense(95000); 

    //minister expense
    minister1.addExpense(200000); 
    minister1.addExpense(900000); 

    // Checking Arrest 
    bool mp1Arrested = commissioner.canArrest(mp1);
    bool minister1Arrested = commissioner.canArrest(minister1, true); 
    bool pmArrested = commissioner.canArrest(pm);

    cout << mp1.getName()<<" MP of "<<mp1.getConstituency()<<" Arrested: " << (mp1Arrested ? "Yes" : "No") << endl;
    cout << minister1.getName()<<" MP of "<<minister1.getConstituency()<<" Arrested: " << (minister1Arrested ? "Yes" : "No") << endl;
    cout << pm.getName()<<" Arrested: " << (pmArrested ? "Yes" : "No") << endl;

    return 0;
}
