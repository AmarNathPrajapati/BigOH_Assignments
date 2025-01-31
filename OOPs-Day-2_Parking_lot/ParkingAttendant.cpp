#include "ParkingAttendant.h"
#include <iostream>

ParkingAttendant::ParkingAttendant(std::string name) {
    this->name = name;
}

void ParkingAttendant::takeTicket(Customer &customer, int duration) {
    ParkingTicket ticket = customer.getParkingTicket(duration);
    ticket.showTicketInfo();
}

void ParkingAttendant::processPayment(ParkingTicket &ticket, std::string method) {
    Payment payment(ticket.getTotalCharge(), method);
    payment.makePayment();
}

