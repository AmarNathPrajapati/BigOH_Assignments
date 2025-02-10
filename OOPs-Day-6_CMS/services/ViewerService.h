#ifndef VIEWERSERVICE_H
#define VIEWERSERVICE_H

#include "../db/db.h"
#include "AuthenticationService.h"
using namespace std;
class ViewerService
{
public:
    static void watchVideo(int videoID);
    static void likeVideo(int userID, int videoID);
    static void commentOnVideo(int userID, int videoID, string commentText);
    static void subscribeToChannel(int userID, int creatorID);
};

#endif // VIEWERSERVICE_H
