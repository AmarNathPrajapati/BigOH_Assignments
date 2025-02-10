#include "VideoService.h"

Video* VideoService::fetchVideoDetails(int videoID) {
    return Db::getInstance().getVideo(videoID);
}

vector<Comment*> VideoService::fetchComments(int videoID) {
    return Db::getInstance().getCommentsByVideo(videoID);
}

void VideoService::shareVideo(int videoID, string platform) {
    cout << "Video ID " << videoID << " shared on " << platform << endl;
}
