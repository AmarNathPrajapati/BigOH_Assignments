#ifndef VEHICLE_H
#define VEHICLE_H

#include <string>

class Vehicle {
public:
    Vehicle();
    Vehicle(std::string vehicleType, std::string vehicleNumber, std::string vehicleSize);

private:
    std::string vehicleType;
    std::string vehicleNumber;
    std::string vehicleSize;
};

#endif
