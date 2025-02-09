#ifndef PAYMENT_H
#define PAYMENT_H

#include <iostream>
using namespace std;

enum class PaymentStatus {
    SUCCESS, FAILED, PENDING
};
 
class Payment{
    private:
        int paymentID;
        int userID;
        int bookingID;
        double amount;
        PaymentStatus status;
    public:
        Payment();
        Payment(int id, int uID, int bID, double amt);
        int getPaymentID() const;
        int getAmount() const;
    
};
#endif