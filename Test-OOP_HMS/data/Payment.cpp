#include "Payment.h"
Payment::Payment(){}
Payment::Payment(int id, int uID, int bID, double amt):
paymentID(id), userID(uID), bookingID(bID), amount(amt),status(PaymentStatus::PENDING){} 

int Payment::getPaymentID() const{
    return paymentID;
}

int Payment::getAmount() const{
    return amount;
}