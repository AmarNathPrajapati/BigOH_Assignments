#ifndef FEEDBACKSERVICE_H
#define FEEDBACKSERVICE_H

#include "../data/Feedback.h"
#include "../db/HotelManagementDB.h"

class FeedbackService
{
public:
    static bool addFeedback(int userID, int hotelID, int rating, std::string comment);
    static std::vector<Feedback> getFeedback(int hotelID);
    static std::vector<Feedback> getUserFeedback(int userID);
};

#endif
