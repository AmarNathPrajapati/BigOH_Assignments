#ifndef PARKING_LOT_H
#define PARKING_LOT_H

#include <vector>
#include <string>
#include "Vehicle.h"

class ParkingLot {
public:
    ParkingLot(int totalFloors, int maxCapacity);
    void addParkingFloor(int floorNumber, int spots);
    void addVehicle(std::string vehicleType, std::string vehicleNumber, std::string vehicleSize, int floor);
    void displayParkingLotStatus();

private:
    int totalFloors;
    int maxCapacity;
    std::vector<std::vector<Vehicle>> floors;
};

#endif