#ifndef VEHICLE_H
#define VEHICLE_H

#include <string>

enum class VehicleType
{
    CAR,
    TRUCK,
    VAN,
    MOTORCYCLE,
    ELECTRIC
};

enum class SpotType
{
    COMPACT,
    LARGE,
    HANDICAPPED,
    MOTORCYCLE,
    ELECTRIC
};

class Vehicle
{
public:
    Vehicle();
    Vehicle(VehicleType type, std::string number, SpotType preferredSpot);
    VehicleType getType() const { return vehicleType; }
    SpotType getPreferredSpot() const { return preferredSpot; }
    std::string getNumber() const { return vehicleNumber; }

private:
    VehicleType vehicleType;
    std::string vehicleNumber;
    SpotType preferredSpot;
    bool isElectric;
};

#endif