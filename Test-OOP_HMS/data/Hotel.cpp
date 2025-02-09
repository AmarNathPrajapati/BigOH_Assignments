#include "Hotel.h"
Hotel::Hotel(){}
Hotel::Hotel(int id, string n, string loc, vector<string>fac):hotelID(id), name(n), location(loc), facilities(fac), rating(0.0), approvedByAdmin(false){}

bool Hotel::getApprovedStatus() const{
    return approvedByAdmin;
}

string Hotel::getName() const{
    return name;
}

string Hotel::getLocation() const{
    return location;
}

int Hotel::getHotelID() const{
    return hotelID;
}