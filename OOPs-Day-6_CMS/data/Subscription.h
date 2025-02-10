#ifndef SUBSCRIPTION_H
#define SUBSCRIPTION_H

class Subscription {
public:
    int subscriptionID;
    int subscriberID;
    int creatorID;

    Subscription(int subID, int subrID, int creID)
        : subscriptionID(subID), subscriberID(subrID), creatorID(creID) {}
};

#endif // SUBSCRIPTION_H
