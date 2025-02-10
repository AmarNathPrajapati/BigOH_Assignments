#include "AdminService.h"

void AdminService::approveVideo(int adminID, int videoID) {
    if (AuthenticationService::isValidUser(adminID) && AuthenticationService::isAdmin(adminID)) {
        Video* video = Db::getInstance().getVideo(videoID);
        video->approved = true;
        cout << "Video " << videoID << " Approved by Admin " << adminID << endl;
    }
}

void AdminService::removeVideo(int adminID, int videoID) {
    if (AuthenticationService::isValidUser(adminID) && AuthenticationService::isAdmin(adminID)) {
        Db::getInstance().deleteVideo(videoID); 
    }
}
 