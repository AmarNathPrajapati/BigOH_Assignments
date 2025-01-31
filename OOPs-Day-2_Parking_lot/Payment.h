#ifndef PAYMENT_H
#define PAYMENT_H

#include <string>

class Payment {
public:
    Payment(double amount, std::string method);
    void makePayment();
    
private:
    double amount;
    std::string method;
};

#endif
