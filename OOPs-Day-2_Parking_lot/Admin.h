#ifndef ADMIN_H
#define ADMIN_H

#include <string>
#include "ParkingLot.h"

class Admin {
public:
    Admin(std::string name);
    void addParkingFloor(ParkingLot &lot, int floorNumber, int spots);
    void removeParkingFloor(ParkingLot &lot, int floorNumber);
    void modifyParkingRate(double newRate);
    
private:
    std::string name;
    double parkingRate;
};

#endif