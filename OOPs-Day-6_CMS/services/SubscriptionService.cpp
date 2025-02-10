#include "SubscriptionService.h"

void SubscriptionService::addSubscription(int userID, int subscriberID, int creatorID) {
    if (AuthenticationService::isValidUser(userID)) {

        int newSubscriptionID = Db::getInstance().getAllSubscriptions().size()+1;
        Subscription *newSubscriber = new Subscription(newSubscriptionID, userID, creatorID);
        Db::getInstance().addSubscription(newSubscriber);
    }
}

void SubscriptionService::unsubscribe(int userID, int subscriberID, int creatorID) {
    if (AuthenticationService::isValidUser(userID)) {
        Db::getInstance().removeSubscription(subscriberID, creatorID);
    }
}

void SubscriptionService::notifySubscriber(int userID, int creatorID, int videoID) {
    if (AuthenticationService::isValidUser(userID)) {
        vector<int> subscribers = Db::getInstance().getSubscribers(creatorID);
        for (int subscriberID : subscribers) {
            cout << "Notification sent to subscriber " << subscriberID 
                      << " about new video " << videoID << endl;
        }
    }
}
