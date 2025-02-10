#ifndef LIKESERVICE_H
#define LIKESERVICE_H

#include "../db/db.h"
#include "AuthenticationService.h"

class LikeService
{
public:
    static void addLike(int userID, int videoID);
    static void toggleLike(int userID, int videoID);
};

#endif // LIKESERVICE_H
