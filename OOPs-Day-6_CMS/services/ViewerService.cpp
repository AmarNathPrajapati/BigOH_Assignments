#include "ViewerService.h"
#include "CommentService.h"
#include "LikeService.h"
#include "SubscriptionService.h"

void ViewerService::watchVideo(int videoID) {
    Video* video = Db::getInstance().getVideo(videoID);
    if (video) {
        video->views++;
    }
}

void ViewerService::likeVideo(int userID, int videoID) {
    if (AuthenticationService::isValidUser(userID)) {
        LikeService::addLike(userID, videoID);
    }
}

void ViewerService::commentOnVideo(int userID, int videoID, string commentText) {
    if (AuthenticationService::isValidUser(userID)) {
        CommentService::addComment(videoID, userID, commentText);
    }
}

void ViewerService::subscribeToChannel(int userID, int creatorID) {
    if (AuthenticationService::isValidUser(userID)) {
        SubscriptionService::addSubscription(userID, userID, creatorID);
    }
}
