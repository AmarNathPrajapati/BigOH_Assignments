#include "Message.h"

Message::Message(int msgID, int sender, int receiver, std::string type, std::string content) 
    : messageID(msgID), senderID(sender), receiverID(receiver), messageType(type), messageContent(content) {}
