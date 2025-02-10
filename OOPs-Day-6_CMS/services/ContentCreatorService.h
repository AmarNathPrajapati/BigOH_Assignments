#ifndef CONTENTCREATORSERVICE_H
#define CONTENTCREATORSERVICE_H

#include "../db/db.h"
#include "AuthenticationService.h"
#include <iostream>
using namespace std;

class ContentCreatorService
{
public:
    static int uploadVideo(int userID, string title, string desc, string category);
    static void editVideo(int userID, int videoID, Video *newDetails);
    static void deleteVideo(int userID, int videoID);
    static void viewAnalytics(int userID, int videoID);
    static void enableMonetization(int userID, int videoID);
};

#endif // CONTENTCREATORSERVICE_H
