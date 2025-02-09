#include "WhatsAppApp.h"
#include <iostream>

WhatsAppApp::WhatsAppApp(User* user) {
    if (WhatsAppServer::getInstance()->getUserByID(user->userID)) {
        currentUser = user;
    } else {
        cout << "User not registered on WhatsApp Server.\n";
        currentUser = nullptr;
    }
}

void WhatsAppApp::addContact(Contact contact) {
    contacts.push_back(contact);
    cout << "Contact added: " << contact.name << endl;
}

vector<Contact> WhatsAppApp::getContacts() {
    return contacts;
}

void WhatsAppApp::sendMessage(Message* msg) {
    if (!currentUser) {
        cout << "You are not a registered user.\n";
        return;
    }
    messages.push_back(msg);
    cout << "Message sent from " << msg->senderID << " to " << msg->receiverID << endl;
}

void WhatsAppApp::editMessage(int messageID, const string& newContent) {
    for (auto& msg : messages) {
        if (msg->messageID == messageID) {
            if (TextMessage* textMsg = dynamic_cast<TextMessage*>(msg)) {
                textMsg->text = newContent;
                cout << "Message edited successfully.\n";
            } else {
                cout << "Only text messages can be edited.\n";
            }
            return;
        }
    }
    cout << "Message ID not found.\n";
}

void WhatsAppApp::deleteMessage(int messageID) {
    for (auto it = messages.begin(); it != messages.end(); ++it) {
        if ((*it)->messageID == messageID) {
            delete *it;
            messages.erase(it);
            cout << "Message deleted successfully.\n";
            return;
        }
    }
    cout << "Message ID not found.\n";
}

vector<Message*> WhatsAppApp::getMessages(int receiverID) {
    vector<Message*> userMessages;
    for (auto& msg : messages) {
        if ((msg->receiverID == receiverID)) {
            userMessages.push_back(msg);
        }
    }
    return userMessages;
}

void WhatsAppApp::postStatus(Status* status) {
    if (!currentUser) {
        cout << "You are not a registered user.\n";
        return;
    }
    statuses.push_back(status);
    cout << "Status posted by user: " << status->userID << endl;
}

vector<Status*> WhatsAppApp::getStatus() {
    return statuses;
}

void WhatsAppApp::deleteStatus(int statusID) {
    for (auto it = statuses.begin(); it != statuses.end(); ++it) {
        if ((*it)->statusID == statusID) {
            delete *it;
            statuses.erase(it);
            cout << "Status deleted successfully.\n";
            return;
        }
    }
    cout << "Status ID not found.\n";
}
