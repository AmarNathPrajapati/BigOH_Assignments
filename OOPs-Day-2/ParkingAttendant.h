#ifndef PARKING_ATTENDANT_H
#define PARKING_ATTENDANT_H

#include <string>
#include "Customer.h"
#include "ParkingTicket.h"

class ParkingAttendant {
public:
    ParkingAttendant(std::string name);
    void takeTicket(Customer &customer, int duration);
    void processPayment(ParkingTicket &ticket, std::string method);
    
private:
    std::string name;
};

#endif
