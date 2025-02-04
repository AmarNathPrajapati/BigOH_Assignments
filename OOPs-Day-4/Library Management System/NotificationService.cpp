#include "NotificationService.h"
#include <algorithm>

void NotificationService::subscribe(Observer* obs) {
    subscribers.push_back(obs);
}

void NotificationService::unsubscribe(Observer* obs) {
    subscribers.erase(remove(subscribers.begin(), subscribers.end(), obs), subscribers.end());
}

void NotificationService::notify(string message) {
    for (Observer* obs : subscribers) {
        obs->update(message);
    }
}
