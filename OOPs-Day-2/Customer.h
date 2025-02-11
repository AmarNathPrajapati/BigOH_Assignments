#ifndef CUSTOMER_H
#define CUSTOMER_H

#include <string>
#include "ParkingTicket.h"
#include "Payment.h"

class Customer {
public:
    Customer(std::string name, std::string vehicleNumber);
    ParkingTicket getParkingTicket(int duration);
    void makePayment(ParkingTicket &ticket, std::string method);
    
private:
    std::string name;
    std::string vehicleNumber;
};

#endif
