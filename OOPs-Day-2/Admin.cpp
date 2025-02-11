#include "Admin.h"
#include <iostream>

Admin::Admin(std::string name) {
    this->name = name;
    this->parkingRate = 4.0;  // Default rate
}

//Admin can add parking floors
void Admin::addParkingFloor(ParkingLot &lot, int floorNumber, int spots) {
    lot.addParkingFloor(floorNumber, spots);
    std::cout << "Admin " << name << " added floor " << floorNumber << " with " << spots << " spots." << std::endl;
}

void Admin::removeParkingFloor(ParkingLot &lot, int floorNumber) {
    std::cout << "Admin " << name << " removed floor " << floorNumber << "." << std::endl;
}

void Admin::modifyParkingRate(double newRate) {
    parkingRate = newRate;
    std::cout << "Admin " << name << " updated the parking rate to $" << newRate << " per hour." << std::endl;
}
