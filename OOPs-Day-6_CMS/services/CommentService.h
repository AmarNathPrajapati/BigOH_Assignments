#ifndef COMMENTSERVICE_H
#define COMMENTSERVICE_H

#include "../db/db.h"
#include "../utils/Utils.h"
#include "AuthenticationService.h"
using namespace std;

class CommentService
{
public:
    static void addComment(int videoID, int userID, string commentText);
    static void editComment(int commentID, int userID, string newText);
    static void deleteComment(int commentID, int userID);
};

#endif // COMMENTSERVICE_H
