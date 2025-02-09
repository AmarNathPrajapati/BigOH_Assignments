#ifndef HOTEL_H
#define HOTEL_H

#include <iostream>
#include <vector>
using namespace std;

class Hotel{
    private:
        int hotelID;
        string name;
        string location;
        vector<int>rooms;
        vector<string>facilities;
        float rating;
    public:
        bool approvedByAdmin;
        Hotel();
        Hotel(int hotelID, string n, string loc, vector<string>fac);
        bool getApprovedStatus() const;
        string getName() const;
        string getLocation() const;
        int getHotelID() const;
};
#endif