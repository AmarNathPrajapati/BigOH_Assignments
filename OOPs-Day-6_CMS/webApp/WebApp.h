#ifndef WEBAPP_H
#define WEBAPP_H

#include "../db/db.h"
using namespace std;
#include <vector>
class WebApp
{
public:
    static vector<Video> searchVideo(string query);
    static vector<Video> filterByCategory(string category);
};

#endif // WEBAPP_H
