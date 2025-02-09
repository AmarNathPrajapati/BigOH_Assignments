#include "PaymentService.h"
#include <iostream>

Payment PaymentService::processPayment(int userID, int bookingID, double amount) {
    int newPaymentID = HotelManagementDB::payments.size() + 1;
    Payment newPayment(newPaymentID, userID, bookingID, amount);
    HotelManagementDB::payments.push_back(newPayment);
    return newPayment;
}

bool PaymentService::refundPayment(int paymentID) {
    for (auto it = HotelManagementDB::payments.begin(); it != HotelManagementDB::payments.end(); ++it) {
        if (it->getPaymentID() == paymentID) {
            HotelManagementDB::payments.erase(it);
            return true;
        }
    }
    return false;
}

Payment PaymentService::getPaymentDetails(int paymentID) {
    for (const Payment& payment : HotelManagementDB::payments) {
        if (payment.getPaymentID() == paymentID) {
            return payment;
        }
    }
    return Payment();
}
