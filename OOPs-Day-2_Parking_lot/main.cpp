#include "ParkingLot.h"
#include <iostream>
#include "Admin.h"
#include "Customer.h"
#include "ParkingAttendant.h"

int main() {
    ParkingLot parkingLot(3, 100);
    Admin admin("John Doe");
    Customer customer("Alice", "ABC123");
    ParkingAttendant attendant("Bob");

    admin.addParkingFloor(parkingLot, 0, 50);
    admin.addParkingFloor(parkingLot, 1, 50);
    admin.addParkingFloor(parkingLot, 2, 100);

    // Customer interaction
    ParkingTicket ticket = customer.getParkingTicket(3);  // Get a ticket for 3 hours
    customer.makePayment(ticket, "card");  // Customer pays with card

    // Attendant interaction
    attendant.takeTicket(customer, 2);  // Attendant gives ticket for 2 hours
    attendant.processPayment(ticket, "cash");  // Attendant processes payment by cash

    parkingLot.displayParkingLotStatus();  // Display parking lot status
    return 0;
}

