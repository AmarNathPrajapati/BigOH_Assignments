#include "LikeService.h"

void LikeService::addLike(int userID, int videoID) {
    if (AuthenticationService::isValidUser(userID)) {
        Video* video = Db::getInstance().getVideo(videoID);
        if (video) {
            video->likes++;
        }
    }
}

void LikeService::toggleLike(int userID, int videoID) {
    if (AuthenticationService::isValidUser(userID)) {
        Video* video = Db::getInstance().getVideo(videoID);
        if (video) {
            video->likes = (video->likes > 0) ? video->likes - 1 : video->likes + 1;
        }
    }
}
