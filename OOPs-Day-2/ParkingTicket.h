#ifndef PARKING_TICKET_H
#define PARKING_TICKET_H

#include <string>

class ParkingTicket {
public:
    ParkingTicket(std::string vehicleNumber, int duration);
    void generateTicket();
    void showTicketInfo();
    double getTotalCharge();

private:
    std::string vehicleNumber;
    int duration;  // In hours
    double totalCharge;
};

#endif
