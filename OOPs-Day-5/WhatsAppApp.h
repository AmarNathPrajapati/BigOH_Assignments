#ifndef WHATSAPPAPP_H
#define WHATSAPPAPP_H

#include <vector>
#include <map>
#include "User.h"
#include "Contact.h"
#include "Message.h"
#include "Status.h"
#include "WhatsAppServer.h"

class WhatsAppApp {
private:
    User* currentUser;
    std::vector<Contact> contacts;
    std::vector<Message*> messages;
    std::vector<Status*> statuses;

public:
    WhatsAppApp(User* user);

    void addContact(Contact contact);
    std::vector<Contact> getContacts();

    void sendMessage(Message* msg);
    void editMessage(int messageID, const std::string& newContent);
    void deleteMessage(int messageID);
    std::vector<Message*> getMessages(int senderID, int receiverID);

    void postStatus(Status* status);
    std::vector<Status*> getStatus();
    void deleteStatus(int statusID);
};

#endif
