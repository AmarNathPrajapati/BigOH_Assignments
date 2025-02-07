#include "Notification.h"
#include <iostream>

void Notification::sendNotification(const std::string& message, const std::string& recipient) {
    std::cout << "Notification to " << recipient << ": " << message << std::endl;
}
