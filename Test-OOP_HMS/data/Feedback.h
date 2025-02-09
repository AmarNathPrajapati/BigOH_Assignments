#ifndef FEEDBACK_H
#define FEEDBACK_H

#include <iostream>
using namespace std;

class Feedback{
    private:
        int feedbackID;
        int userID; 
        int hotelID;
        int rating;
        string comment;
    public:
        Feedback(int id, int uID, int hID, int r, string c);
        int getHotelID() const;
        int getUserID() const;
};
#endif