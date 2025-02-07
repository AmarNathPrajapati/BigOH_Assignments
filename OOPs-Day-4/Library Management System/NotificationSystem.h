#ifndef NOTIFICATIONSYSTEM_H
#define NOTIFICATIONSYSTEM_H

#include <string>
#include <iostream>

class NotificationSystem {
public:
    void sendNotification(const std::string& message) {
        std::cout << "Notification: " << message << std::endl;
    }
};

#endif
