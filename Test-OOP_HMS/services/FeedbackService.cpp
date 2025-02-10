#include "FeedbackService.h"
#include <iostream>

bool FeedbackService::addFeedback(int userID, int hotelID, int rating, string comment) {
    int newFeedbackID = db->getFeedbacks().size() + 1;
    Feedback newFeedback(newFeedbackID, userID, hotelID, rating, comment);
    db->addFeedback(newFeedback);
    return true;
}

vector<Feedback> FeedbackService::getFeedback(int hotelID) {
    vector<Feedback> hotelFeedback;
    for (const Feedback& feedback : db->getFeedbacks()) {
        if (feedback.getHotelID() == hotelID) {
            hotelFeedback.push_back(feedback);
        }
    }
    return hotelFeedback;
}

vector<Feedback> FeedbackService::getUserFeedback(int userID) {
    vector<Feedback> userFeedback;
    for (const Feedback& feedback : db->getFeedbacks()) {
        if (feedback.getUserID() == userID) {
            userFeedback.push_back(feedback);
        }
    }
    return userFeedback;
}
