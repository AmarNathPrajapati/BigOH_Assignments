#include "Status.h"

TextStatus::TextStatus(int id, int user, string txt) {
    statusID = id;
    userID = user;
    text = txt;
    timestamp = time(0);
}

string TextStatus::getStatusType() { return "Text"; }

ImageStatus::ImageStatus(int id, int user, string imgPath) {
    statusID = id;
    userID = user;
    imagePath = imgPath;
    timestamp = time(0);
}

string ImageStatus::getStatusType() { return "Image"; }
