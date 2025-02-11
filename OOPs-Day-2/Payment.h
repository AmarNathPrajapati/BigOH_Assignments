#ifndef PAYMENT_H
#define PAYMENT_H

#include <string>

enum class PaymentLocation
{
    EXIT_PANEL,
    INFO_PORTAL,
    ATTENDANT
};

enum class PaymentMethod
{
    CASH,
    CREDIT_CARD
};

class Payment
{
public:
    Payment() : amount(0.0), isPaid(false) {}
    Payment(double amount, std::string method);
    bool processPayment();
    void makePayment();
    bool isPaymentComplete() const { return isPaid; }

private:
    double amount;
    std::string method;
    PaymentLocation location;
    bool isPaid;
};

#endif