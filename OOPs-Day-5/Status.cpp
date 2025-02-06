#include "Status.h"

Status::Status(int id, int user, std::string type, std::string content) 
    : statusID(id), userID(user), statusType(type), statusContent(content) {}
