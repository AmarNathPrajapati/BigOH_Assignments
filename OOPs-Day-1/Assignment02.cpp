/*
suppose you are making a program for a very famous IoT Inverter company, 

company have multiple inverters with multiple business logic,

use cases:

company have PCU, GTI, Zelio, Regalia, iCruze Inverters, 

All Inverters have Power rating which is determined by ( Current * Operating Voltage ) ------------->Done

Only PCU, GTI and Regalia are solar Inverters other are not (solar inverters get charge by solar panels and solar energy),
Solar Inverters have Solar Panels also ---------------------------------------------------->Done

Solar Inverters further have two option one Battery version that whatever energy is produced will be stored in battery other will not store any energy,-------------------------------------------------------------------------->Done

so PCU comes with battery but GTI have no battery,----------------------------------------->Done

Solar Inverter also have GRID On , system where you can sell your extra energy back, GTI is GRID On where as this feature is not available in PCU,------------------------------------------------>Done

Non Solar Inverters are Simple Home Inverters Which have a Battery," ----------------------------------------->Done

 */
#include <iostream>
#include <vector>

using namespace std;

// Base Class: Inverter
class Inverter {
    // protected:
    //     string name;
    //     int current;
    //     int voltage;
    protected:
        string name;
        int current;
        int voltage;

    public:
        Inverter(string name, int current, int voltage){
            this->name = name;
            this->current = current;
            this->voltage = voltage;
        }
        
        //calculating the power rating
        virtual int calculatePowerRating(){
            return current*voltage;
        }
        //checking solar invertor
        virtual bool isSolarInverter(){
            return false;
        }
        //displaying the power rating
        virtual void displayInfo(){
            cout << name << " - Power Rating: " << calculatePowerRating() << "W\n";
        }
};



class SolarPanel{
    private:
        int efficiency;
    public:
        SolarPanel(int efficiency){
            this->efficiency = efficiency;
        }
        int getEfficiency(){
            return efficiency;
        }
};

// Derived Class: SolarInverter (Abstract)
class SolarInverter : public Inverter {
    protected:
        SolarPanel panel;
        bool hasBattery;
    public:
        SolarInverter(string name, int current, int voltage, int panelEfficiency, bool hasBattery)
            : Inverter(name, current, voltage), panel(panelEfficiency), hasBattery(hasBattery) {}

        //Checking Solar Invertor
        bool isSolarInverter() override {
            return true;
        }

        void displayInfo() override {
            cout << name << " - Solar Power Rating: " << calculatePowerRating() << "W\n";
            cout << "Solar Panel Efficiency: " << panel.getEfficiency() << "%\n";
            cout << "Battery Backup: " << (hasBattery ? "Yes" : "No") << "\n";
        }
};

// Specific Solar Inverter Types


class PCU : public SolarInverter{
    public:
            PCU(int current, int voltage, int panelEfficiency)
            :SolarInverter("PCU", current, voltage, panelEfficiency, true){};
};

class GTI : public SolarInverter {
public:
    GTI(int current, int voltage, int panelEfficiency)
        : SolarInverter("GTI", current, voltage, panelEfficiency, false) {}//Solar Inverter without battery

    void displayInfo() override {
        SolarInverter::displayInfo();
        cout << "Grid-On Feature: Yes (Can sell excess energy)\n";
    }
};

class Regalia : public SolarInverter {
public:
    Regalia(int current, int voltage, int panelEfficiency)
        : SolarInverter("Regalia", current, voltage, panelEfficiency, false) {}
};

// Non-Solar Inverters 
class HomeInverter : public Inverter {
protected:
    bool hasBattery;
public:
    HomeInverter(string name, int current, int voltage)
        : Inverter(name, current, voltage), hasBattery(true) {}

    void displayInfo() override {
        cout << name << " - Home Inverter Power Rating: " << calculatePowerRating() << "W\n";
        cout << "Battery Backup: Yes\n";
    }
};

class Zelio : public HomeInverter{
    public:
        Zelio(int current, int voltage): HomeInverter("Zelio", current, voltage) {}
};

class iCruze : public HomeInverter{
    public:
        iCruze(int current, int voltage): HomeInverter("iCruze", current, voltage){}
};

// Main Function to Test
int main() {
    // Creating different inverters
    PCU pcu(10, 230, 85);
    GTI gti(15, 230, 90);
    Regalia regalia(12, 230, 80);
    Zelio zelio(8, 230);
    iCruze icruze(10, 230);

    // Store all inverters in a list
    vector<Inverter*>inverters = {&pcu, &gti, &regalia, &zelio, &icruze};
    
    for(auto inverter : inverters){
        inverter->displayInfo();
        cout<<endl;
    }

    return 0;
}

