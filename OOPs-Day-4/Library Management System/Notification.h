#ifndef NOTIFICATION_H
#define NOTIFICATION_H

#include <string>

class Notification {
public:
    void sendNotification(const std::string &message, const std::string &recipient);
};

#endif
