#include "WebApp.h"
#include <algorithm>

vector<Video> WebApp::searchVideo(string query) {
    vector<Video> result;
    vector<Video*> videos = Db::getInstance().getAllVideos();

    for (Video* video : videos) { 
        if (video->approved && 
            (video->title.find(query) != string::npos || 
             video->description.find(query) != string::npos)) {
            result.push_back(*video);
        }
    }
    return result;
}

vector<Video> WebApp::filterByCategory(string category) {
    vector<Video> result;
    vector<Video*> videos = Db::getInstance().getAllVideos();

    for (Video* video : videos) {
        if (video->approved && video->category == category) {
            result.push_back(*video);
        }
    }
    return result;
}
