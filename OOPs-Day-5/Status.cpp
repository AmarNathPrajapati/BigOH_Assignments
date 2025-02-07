#include "Status.h"

TextStatus::TextStatus(int id, int user, std::string txt) {
    statusID = id;
    userID = user;
    text = txt;
    timestamp = std::time(0);
}

std::string TextStatus::getStatusType() { return "Text"; }

ImageStatus::ImageStatus(int id, int user, std::string imgPath) {
    statusID = id;
    userID = user;
    imagePath = imgPath;
    timestamp = std::time(0);
}

std::string ImageStatus::getStatusType() { return "Image"; }
