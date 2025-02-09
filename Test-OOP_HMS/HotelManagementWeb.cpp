#include "HotelManagementWeb.h"

std::vector<Hotel> HotelManagementWeb::displayApprovedHotels() {
    std::vector<Hotel> approvedHotels;
    for (const Hotel& hotel : HotelManagementDB::hotels) {
        if (hotel.getApprovedStatus()) {
            approvedHotels.push_back(hotel);
        }
    }
    return approvedHotels;
}
