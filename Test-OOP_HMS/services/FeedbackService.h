#ifndef FEEDBACKSERVICE_H
#define FEEDBACKSERVICE_H

#include "../data/Feedback.h"
#include "BaseService.h"
using namespace std;

class FeedbackService: public BaseService
{
public:
    static bool addFeedback(int userID, int hotelID, int rating, string comment);
    static vector<Feedback> getFeedback(int hotelID);
    static vector<Feedback> getUserFeedback(int userID);
};

#endif
