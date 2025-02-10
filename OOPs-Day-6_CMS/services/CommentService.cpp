#include "CommentService.h"

void CommentService::addComment(int videoID, int userID, string commentText) {
    if (AuthenticationService::isValidUser(userID)) {
        int commentID = Db::getInstance().getAllComments().size() + 1;
        string currentTime = Utils::getCurrentTime();
        Comment *newComment =new Comment{commentID, videoID, userID, commentText, currentTime};
        Db::getInstance().addComment(newComment);
    }
}

void CommentService::editComment(int commentID, int userID, string newText) {
    Comment* comment = Db::getInstance().getComment(commentID);
    if (comment && comment->userID == userID) {
        comment->text = newText;
    }
}

void CommentService::deleteComment(int commentID, int userID) {
    Comment* comment = Db::getInstance().getComment(commentID);
    if (comment && comment->userID == userID) {
        Db::getInstance().removeComment(commentID);
    }
} 
