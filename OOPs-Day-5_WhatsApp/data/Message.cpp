#include "Message.h"

Message::Message(int msgID, int sender, int receiver)
    : messageID(msgID), senderID(sender), receiverID(receiver) {
    timestamp = time(0);
}

TextMessage::TextMessage(int msgID, int sender, int receiver, string txt) 
    : Message(msgID, sender, receiver), text(txt) {}

string TextMessage::getMessageType() { return "Text"; }

AudioMessage::AudioMessage(int msgID, int sender, int receiver, string filePath) 
    : Message(msgID, sender, receiver), audioFilePath(filePath) {}

string AudioMessage::getMessageType() { return "Audio"; }

VideoMessage::VideoMessage(int msgID, int sender, int receiver, string filePath) 
    : Message(msgID, sender, receiver), videoFilePath(filePath) {}

string VideoMessage::getMessageType() { return "Video"; }
