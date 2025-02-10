#include "PaymentService.h"
#include <iostream>

Payment PaymentService::processPayment(int userID, int bookingID, double amount) {
    int newPaymentID = db->getPayments().size() + 1;
    Payment newPayment(newPaymentID, userID, bookingID, amount);
    db->addPayment(newPayment);
    return newPayment;
}

bool PaymentService::refundPayment(int paymentID) {
    for (auto it = db->getPayments().begin(); it != db->getPayments().end(); ++it) {
        if (it->getPaymentID() == paymentID) {
            db->getPayments().erase(it);
            return true;
        }
    }
    return false;
}

Payment PaymentService::getPaymentDetails(int paymentID) {
    for (const Payment& payment : db->getPayments()) {
        if (payment.getPaymentID() == paymentID) {
            return payment;
        }
    }
    return Payment();
}
