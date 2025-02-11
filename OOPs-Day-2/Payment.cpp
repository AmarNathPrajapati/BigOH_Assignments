#include "Payment.h"
#include <iostream>

Payment::Payment(double amount, std::string method) {
    this->amount = amount;
    this->method = method;
}

void Payment::makePayment() {
    std::cout << "Payment of $" << amount << " has been made through " << method << std::endl;
}
