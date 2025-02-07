#include "ParkingLot.h"
#include <iostream>
#include "Admin.h"
#include "Customer.h"
#include "ParkingAttendant.h"

int main() {
    // Initialize parking lot with 3 floors
    std::cout << "\n=== Initializing Parking Lot ===\n";
    ParkingLot parkingLot(3, 100);
    
    // Create actors
    Admin admin("Amar Nath");
    ParkingAttendant attendant1("Bob");
    ParkingAttendant attendant2("Alice");
    
    // Test admin functions
    std::cout << "\n=== Testing Admin Functions ===\n";
    admin.addParkingFloor(parkingLot, 0, 50);
    admin.addParkingFloor(parkingLot, 1, 50);
    admin.addParkingFloor(parkingLot, 2, 100);
    admin.modifyParkingRate(5.0); // Change default rate to $5/hour
    
    // Add charging panels for electric vehicles
    parkingLot.addChargingPanel(0, 0);
    parkingLot.addChargingPanel(1, 0);
    
    // Test different vehicle types
    std::cout << "\n=== Testing Different Vehicle Types ===\n";
    Vehicle car(VehicleType::CAR, "CAR-001", SpotType::COMPACT);
    Vehicle truck(VehicleType::TRUCK, "TRK-001", SpotType::LARGE);
    Vehicle electric(VehicleType::ELECTRIC, "EV-001", SpotType::ELECTRIC);
    Vehicle bike(VehicleType::MOTORCYCLE, "BIKE-001", SpotType::MOTORCYCLE);
    
    // Test parking vehicles
    std::cout << "\n=== Testing Vehicle Parking ===\n";
    parkingLot.parkVehicle(&car, 0);
    parkingLot.parkVehicle(&truck, 1);
    parkingLot.parkVehicle(&electric, 0); // Should park in spot with charging panel
    parkingLot.parkVehicle(&bike, 2);
    
    // Display current status
    parkingLot.displayParkingLotStatus();
    
    // Test customer interactions
    std::cout << "\n=== Testing Customer Interactions ===\n";
    Customer customer1("Alice", "CAR-001");
    Customer customer2("Bob", "EV-001");
    
    // Test ticket generation and payment
    ParkingTicket ticket1 = customer1.getParkingTicket(2); // 2 hours parking
    ticket1.showTicketInfo();
    customer1.makePayment(ticket1, "credit_card");
    
    ParkingTicket ticket2 = customer2.getParkingTicket(4); // 4 hours parking
    ticket2.showTicketInfo();
    
    // Test attendant interactions
    std::cout << "\n=== Testing Attendant Interactions ===\n";
    attendant1.takeTicket(customer2, 3);
    attendant1.processPayment(ticket2, "cash");
    
    // Test vehicle removal
    std::cout << "\n=== Testing Vehicle Removal ===\n";
    parkingLot.removeVehicle("CAR-001");
    parkingLot.removeVehicle("EV-001");
    
    // Display final status
    std::cout << "\n=== Final Parking Lot Status ===\n";
    parkingLot.displayParkingLotStatus();
    
    // Test full capacity
    std::cout << "\n=== Testing Capacity Limits ===\n";
    for(int i = 0; i < 52; i++) { // Try to overflow first floor
        Vehicle* tempCar = new Vehicle(VehicleType::CAR, "TEMP-" + std::to_string(i), SpotType::COMPACT);
        if(!parkingLot.parkVehicle(tempCar, 0)) {
            std::cout << "Parking failed: Floor 0 is full\n";
            break;
        }
    }
    
    // Display final status after capacity test
    parkingLot.displayParkingLotStatus();
    
    return 0;
}
// to run this code
/*

g++ Admin.cpp Customer.cpp ParkingAttendant.cpp ParkingLot.cpp ParkingTicket.cpp Payment.cpp Vehicle.cpp main.cpp -o parkingLot.exe
./parkingLot.exe


*/
