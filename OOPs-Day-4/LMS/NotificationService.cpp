#include "NotificationService.h"

void NotificationService::sendOverdueNotification(Member* member) {
    std::cout << "📢 Overdue Alert for " << member->getName() 
              << "! You have overdue books. Please return them ASAP.\n";
}

void NotificationService::sendReservationNotification(Member* member) {
    std::cout << "📢 Reservation Alert for " << member->getName() 
              << "! Your reserved book is now available for pickup.\n";
}

void NotificationService::sendGeneralNotification(Member* member, string message) {
    std::cout << "📢 Notification for " << member->getName() << ": " << message << std::endl;
}
