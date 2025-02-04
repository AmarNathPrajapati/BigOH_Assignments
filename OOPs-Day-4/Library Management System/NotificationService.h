#ifndef NOTIFICATION_SERVICE_H
#define NOTIFICATION_SERVICE_H

#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Observer {
public:
    virtual void update(string message) = 0;
};

class NotificationService {
private:
    vector<Observer*> subscribers;

public:
    void subscribe(Observer* obs);
    void unsubscribe(Observer* obs);
    void notify(string message);
};

#endif
