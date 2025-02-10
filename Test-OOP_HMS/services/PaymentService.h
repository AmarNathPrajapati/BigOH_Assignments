#ifndef PAYMENTSERVICE_H
#define PAYMENTSERVICE_H

#include "../data/Payment.h"
#include "BaseService.h"

class PaymentService:public BaseService
{
public:
    static Payment processPayment(int userID, int bookingID, double amount);
    static bool refundPayment(int paymentID);
    static Payment getPaymentDetails(int paymentID);
};

#endif
