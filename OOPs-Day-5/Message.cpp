#include "Message.h"

Message::Message(int msgID, int sender, int receiver)
    : messageID(msgID), senderID(sender), receiverID(receiver) {
    timestamp = std::time(0);
}

TextMessage::TextMessage(int msgID, int sender, int receiver, std::string txt) 
    : Message(msgID, sender, receiver), text(txt) {}

std::string TextMessage::getMessageType() { return "Text"; }

AudioMessage::AudioMessage(int msgID, int sender, int receiver, std::string filePath) 
    : Message(msgID, sender, receiver), audioFilePath(filePath) {}

std::string AudioMessage::getMessageType() { return "Audio"; }

VideoMessage::VideoMessage(int msgID, int sender, int receiver, std::string filePath) 
    : Message(msgID, sender, receiver), videoFilePath(filePath) {}

std::string VideoMessage::getMessageType() { return "Video"; }
