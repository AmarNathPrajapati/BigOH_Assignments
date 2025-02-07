#include <iostream>
#include "WhatsAppApp.h"

int main()
{
    // WhatsApp Server Instance
    WhatsAppServer *server = WhatsAppServer::getInstance();

    // Creating and registering users
    User user1(1, "Amit", "1234567890", "amit@example.com");
    User user2(2, "Rahul", "0987654321", "rahul@example.com");

    server->registerUser(user1);
    server->registerUser(user2);

    // Creating WhatsApp accounts
    WhatsAppApp amitWhatsApp(&user1);
    WhatsAppApp rahulWhatsApp(&user2);

    // Adding contacts
    amitWhatsApp.addContact(Contact(2, "Rahul", "0987654321"));
    rahulWhatsApp.addContact(Contact(1, "Amit", "1234567890"));

    // Sending messages
    Message *msg1 = new TextMessage(101, 1, 2, "Hello Rahul!");
    amitWhatsApp.sendMessage(msg1);

    Message *msg2 = new TextMessage(102, 2, 1, "Hi Amit, How are you?");
    rahulWhatsApp.sendMessage(msg2);

    // Displaying messages
    std::vector<Message *> chat = amitWhatsApp.getMessages(1, 2);
    for (auto msg : chat)
    {
        if (TextMessage *textMsg = dynamic_cast<TextMessage *>(msg))
        {
            std::cout << "Message: " << textMsg->text << std::endl;
        }
    }

    // Editing a message
    amitWhatsApp.editMessage(101, "Hey Rahul, What's up?");

    // Posting and deleting status
    Status *status1 = new TextStatus(201, 1, "Feeling great today!");
    amitWhatsApp.postStatus(status1);

    Status *status2 = new ImageStatus(202, 2, "holiday.png");
    rahulWhatsApp.postStatus(status2);

    amitWhatsApp.deleteStatus(201);

    // Free allocated memory
    for (auto msg : chat)
    {
        delete msg;
    }

    return 0;
}
