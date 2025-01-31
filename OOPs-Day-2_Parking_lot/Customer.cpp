#include "Customer.h"
#include <iostream>

Customer::Customer(std::string name, std::string vehicleNumber) {
    this->name = name;
    this->vehicleNumber = vehicleNumber;
}

ParkingTicket Customer::getParkingTicket(int duration) {
    ParkingTicket ticket(vehicleNumber, duration);
    ticket.generateTicket();
    return ticket;
}

void Customer::makePayment(ParkingTicket &ticket, std::string method) {
    Payment payment(ticket.getTotalCharge(), method);
    payment.makePayment();
}