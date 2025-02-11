#include "BaseService.h"

// Define the static member variable outside the class
HotelManagementDB* BaseService::db = nullptr;

BaseService::BaseService() {
    if (db == nullptr) {
        db = HotelManagementDB::getInstance();
    }
}
