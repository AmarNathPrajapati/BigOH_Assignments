// #ifndef BASESERVICE_H
// #define BASESERVICE_H

// #include "../db/HotelManagementDB.h"

// class BaseService {
// protected:
//     static HotelManagementDB* db;  // Static instance, sabhi services ke liye common

// public:
//     BaseService() {
//         if (db == nullptr) {
//             db = HotelManagementDB::getInstance();  
//         }
//     }
// };

// #endif

#ifndef BASESERVICE_H
#define BASESERVICE_H

#include "../db/HotelManagementDB.h"

class BaseService {
protected:
    static HotelManagementDB* db;  // Static instance, sabhi services ke liye common

public:
    BaseService();
};

#endif

