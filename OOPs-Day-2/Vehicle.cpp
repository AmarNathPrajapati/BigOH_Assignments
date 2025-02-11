#include "Vehicle.h"

Vehicle::Vehicle()
{
    vehicleType = VehicleType::CAR;
    vehicleNumber = "";
    preferredSpot = SpotType::COMPACT;
}

Vehicle::Vehicle(VehicleType type, std::string number, SpotType spot)
{
    vehicleType = type;
    vehicleNumber = number;
    preferredSpot = spot;
    isElectric = (type == VehicleType::ELECTRIC);
}