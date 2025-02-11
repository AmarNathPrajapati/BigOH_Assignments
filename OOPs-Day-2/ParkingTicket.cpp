#include "ParkingTicket.h"
#include <iostream>

ParkingTicket::ParkingTicket(std::string vehicleNumber, int duration) {
    this->vehicleNumber = vehicleNumber;
    this->duration = duration;
    this->totalCharge = 0;
}

void ParkingTicket::generateTicket() {
    // For simplicity, calculate total charge
    if (duration <= 1) totalCharge = 4.0;
    else if (duration == 2 || duration == 3) totalCharge = 3.5 * duration;
    else totalCharge = 2.5 * duration;
}

void ParkingTicket::showTicketInfo() {
    std::cout << "Vehicle: " << vehicleNumber << ", Duration: " << duration << " hours, Charge: $" << totalCharge << std::endl;
}

double ParkingTicket::getTotalCharge() {
    return totalCharge;
}
