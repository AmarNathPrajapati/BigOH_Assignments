#include "Vehicle.h"

Vehicle::Vehicle() {
    vehicleType = "";
    vehicleNumber = "";
    vehicleSize = "";
}

Vehicle::Vehicle(std::string vehicleType, std::string vehicleNumber, std::string vehicleSize) {
    this->vehicleType = vehicleType;
    this->vehicleNumber = vehicleNumber;
    this->vehicleSize = vehicleSize;
}
