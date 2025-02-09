#ifndef WHATSAPPAPP_H
#define WHATSAPPAPP_H

#include <vector>
#include <map>
#include "../data/User.h"
#include "../data/Contact.h"
#include "../data/Message.h"
#include "../data/Status.h"
#include "../server/WhatsAppServer.h"
using namespace std;
class WhatsAppApp {
private:
    User* currentUser;
    vector<Contact> contacts;
    vector<Message*> messages;
    vector<Status*> statuses;

public:
    WhatsAppApp(User* user);

    void addContact(Contact contact);
    vector<Contact> getContacts();

    void sendMessage(Message* msg);
    void editMessage(int messageID, const string& newContent);
    void deleteMessage(int messageID);
    vector<Message*> getMessages(int receiverID);

    void postStatus(Status* status);
    vector<Status*> getStatus();
    void deleteStatus(int statusID);
};

#endif
