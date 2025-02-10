#ifndef SUBSCRIPTIONSERVICE_H
#define SUBSCRIPTIONSERVICE_H

#include "../db/db.h"
#include "AuthenticationService.h"
#include <iostream>
using namespace std;

class SubscriptionService
{
public:
    static void addSubscription(int userID, int subscriberID, int creatorID);
    static void unsubscribe(int userID, int subscriberID, int creatorID);
    static void notifySubscriber(int userID, int creatorID, int videoID);
};

#endif // SUBSCRIPTIONSERVICE_H
