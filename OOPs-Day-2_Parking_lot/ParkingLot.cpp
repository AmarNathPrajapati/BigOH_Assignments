#include "ParkingLot.h"
#include <iostream>

ParkingLot::ParkingLot(int totalFloors, int maxCapacity) {
    this->totalFloors = totalFloors;
    this->maxCapacity = maxCapacity;
    floors.resize(totalFloors);
}

void ParkingLot::addParkingFloor(int floorNumber, int spots) {
    for (int i = 0; i < spots; i++) {
        floors[floorNumber].push_back(Vehicle());
    }
}

void ParkingLot::addVehicle(std::string vehicleType, std::string vehicleNumber, std::string vehicleSize, int floor) {
    Vehicle vehicle(vehicleType, vehicleNumber, vehicleSize);
    floors[floor].push_back(vehicle);
}

void ParkingLot::displayParkingLotStatus() {
    for (int i = 0; i < totalFloors; i++) {
        std::cout << "Floor " << i << " has " << floors[i].size() << " vehicles." << std::endl;
    }
}


