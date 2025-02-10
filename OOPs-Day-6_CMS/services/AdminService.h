#ifndef ADMINSERVICE_H
#define ADMINSERVICE_H

#include <iostream>
#include "../db/db.h"
#include "AuthenticationService.h"
using namespace std;

class AdminService {
public:
    static void approveVideo(int adminID, int videoID);
    static void removeVideo(int adminID, int videoID);
};

#endif // ADMINSERVICE_H
 