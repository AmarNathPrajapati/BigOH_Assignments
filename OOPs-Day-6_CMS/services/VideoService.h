#ifndef VIDEOSERVICE_H
#define VIDEOSERVICE_H

#include "../db/db.h"
#include <iostream>
using namespace std;

class VideoService
{
public:
    static Video *fetchVideoDetails(int videoID);
    static vector<Comment *> fetchComments(int videoID);
    static void shareVideo(int videoID, string platform);
};

#endif // VIDEOSERVICE_H
