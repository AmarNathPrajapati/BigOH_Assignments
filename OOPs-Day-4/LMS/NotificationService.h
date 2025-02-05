#ifndef NOTIFICATIONSERVICE_H
#define NOTIFICATIONSERVICE_H

#include <iostream>
#include <vector>
#include "Member.h"

class NotificationService {
public:
    void sendOverdueNotification(Member* member);
    void sendReservationNotification(Member* member);
    void sendGeneralNotification(Member* member, string message);
};

#endif
