#include "WhatsApp.h"
#include <iostream>

int main() {
    WhatsApp app;
    app.registerUser(1, "Amit", "9876543210", "amit@gmail.com");
    app.registerUser(2, "Rohan", "9123456789", "rohan@gmail.com");

    app.addContact(1, 2);
    app.sendMessage(1, 2, "text", "Hello Rohan!");
    app.postStatus(1, "text", "Feeling great today!");

    return 0;
}
