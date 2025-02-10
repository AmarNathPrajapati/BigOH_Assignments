#ifndef CONTENTCREATOR_H
#define CONTENTCREATOR_H

#include "Viewer.h"
using namespace std;

class ContentCreator : public Viewer {
public:
    vector<int> uploadedVideos;
    string channelName;
    double revenue;

    ContentCreator(int id, string n, string e, string p, string date, string channel)
        : Viewer(id, n, e, p, date), channelName(channel), revenue(0.0) {
        role = "Creator";  // Override role
    }
};

#endif // CONTENTCREATOR_H
