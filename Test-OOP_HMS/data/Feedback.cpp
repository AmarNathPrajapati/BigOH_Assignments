#include "Feedback.h"

Feedback::Feedback(int id, int uID, int hID, int r, string c):feedbackID(id), userID(uID), hotelID(hID), rating(r), comment(c){} 
int Feedback::getHotelID() const{
    return hotelID;
}
int Feedback::getUserID() const{
    return userID;
}