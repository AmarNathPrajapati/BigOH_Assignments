#include "ParkingLot.h"
#include <iostream>

ParkingLot::ParkingLot(int totalFloors, int spotsPerFloor)
{
    this->totalFloors = totalFloors;
    this->maxCapacity = totalFloors * spotsPerFloor;
    this->currentOccupancy = 0;

    floors.resize(totalFloors);
    for (auto &floor : floors)
    {
        floor.spots.resize(spotsPerFloor);
        floor.hasDisplayBoard = true;
        // Initialize available spots count
        for (const auto &spot : floor.spots)
        {
            floor.availableSpots[spot.type]++;
        }
    }

    entryPoints.resize(3, true); // 3 entry points
    exitPoints.resize(3, true);  // 3 exit points
}

void ParkingLot::addParkingFloor(int floorNumber, int spots)
{
    if (floorNumber >= 0 && floorNumber < totalFloors)
    {
        Floor newFloor;
        newFloor.spots.resize(spots);
        newFloor.hasDisplayBoard = true;
        
        // Initialize spots with different types
        int spotIndex = 0;
        for (; spotIndex < spots/2; spotIndex++)
        {
            newFloor.spots[spotIndex].type = SpotType::COMPACT;
        }
        for (; spotIndex < spots*3/4; spotIndex++)
        {
            newFloor.spots[spotIndex].type = SpotType::LARGE;
        }
        for (; spotIndex < spots*7/8; spotIndex++)
        {
            newFloor.spots[spotIndex].type = SpotType::ELECTRIC;
        }
        for (; spotIndex < spots*15/16; spotIndex++)
        {
            newFloor.spots[spotIndex].type = SpotType::MOTORCYCLE;
        }
        for (; spotIndex < spots; spotIndex++)
        {
            newFloor.spots[spotIndex].type = SpotType::HANDICAPPED;
        }

        // Initialize available spots count
        newFloor.availableSpots.clear();
        for (const auto &spot : newFloor.spots)
        {
            newFloor.availableSpots[spot.type]++;
        }

        floors[floorNumber] = newFloor;
    }
}

void ParkingLot::removeParkingFloor(int floorNumber)
{
    if (floorNumber >= 0 && floorNumber < totalFloors)
    {
        floors[floorNumber].spots.clear();
        floors[floorNumber].availableSpots.clear();
    }
}

bool ParkingLot::parkVehicle(Vehicle *vehicle, int floorNumber)
{
    if (isFull())
    {
        std::cout << "Parking lot is full!\n";
        return false;
    }
    if (floorNumber >= totalFloors)
    {
        std::cout << "Invalid floor number!\n";
        return false;
    }

    auto &floor = floors[floorNumber];
    SpotType requiredType = vehicle->getPreferredSpot();

    if (floor.availableSpots[requiredType] <= 0)
    {
        std::cout << "No available spots of required type on this floor!\n";
        return false;
    }

    for (auto &spot : floor.spots)
    {
        if (!spot.isOccupied && spot.type == requiredType && isSpotSuitable(spot, *vehicle))
        {
            spot.isOccupied = true;
            spot.vehicle = vehicle;
            floor.availableSpots[spot.type]--;
            currentOccupancy++;
            updateDisplayBoard(floorNumber);
            return true;
        }
    }
    return false;
}

bool ParkingLot::removeVehicle(std::string vehicleNumber)
{
    for (auto &floor : floors)
    {
        for (auto &spot : floor.spots)
        {
            if (spot.isOccupied && spot.vehicle &&
                spot.vehicle->getNumber() == vehicleNumber)
            {
                spot.isOccupied = false;
                spot.vehicle = nullptr;
                floor.availableSpots[spot.type]++;
                currentOccupancy--;
                return true;
            }
        }
    }
    return false;
}

void ParkingLot::displayParkingLotStatus() const
{
    std::cout << "\nParking Lot Status:\n";
    std::cout << "Total Capacity: " << maxCapacity << "\n";
    std::cout << "Current Occupancy: " << currentOccupancy << "\n";

    for (int i = 0; i < totalFloors; i++)
    {
        displayFloorStatus(i);
    }
}

void ParkingLot::displayFloorStatus(int floorNumber) const
{
    if (floorNumber >= totalFloors)
        return;

    const auto& floor = floors[floorNumber];
    std::cout << "\nFloor " << floorNumber << " Status:\n";
    // Show counts for each spot type
    std::cout << "Compact spots: " << floor.availableSpots.at(SpotType::COMPACT) << "\n";
    std::cout << "Large spots: " << floor.availableSpots.at(SpotType::LARGE) << "\n";
    std::cout << "Electric spots: " << floor.availableSpots.at(SpotType::ELECTRIC) << "\n";
    std::cout << "Motorcycle spots: " << floor.availableSpots.at(SpotType::MOTORCYCLE) << "\n";
    std::cout << "Handicapped spots: " << floor.availableSpots.at(SpotType::HANDICAPPED) << "\n";
}

void ParkingLot::addChargingPanel(int floorNumber, int spotNumber)
{
    if (floorNumber < totalFloors &&
        spotNumber < floors[floorNumber].spots.size())
    {
        floors[floorNumber].spots[spotNumber].chargingPanel = new ElectricPanel();
    }
}

bool ParkingLot::isFull() const
{
    return currentOccupancy >= maxCapacity;
}

bool ParkingLot::isSpotSuitable(const ParkingSpot &spot, const Vehicle &vehicle) const
{
    if (vehicle.getType() == VehicleType::ELECTRIC &&
        spot.chargingPanel == nullptr)
    {
        return false;
    }
    return spot.type == vehicle.getPreferredSpot();
}

void ParkingLot::updateDisplayBoard(int floorNumber)
{
    // Update display board with current floor status
    displayFloorStatus(floorNumber);
}

