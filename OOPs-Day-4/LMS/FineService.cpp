#include "FineService.h"

void FineService::applyFine(int memberID, double amount, string fineDate) {
    if (fines.find(memberID) == fines.end()) {
        fines[memberID] = new Fine(new Member(memberID, "", ""), amount, fineDate);
    } else {
        fines[memberID]->applyFine(amount);
    }
    std::cout << "Fine applied to Member ID " << memberID << ": ₹" << amount << std::endl;
}

void FineService::displayFineDetails(int memberID) {
    if (fines.find(memberID) != fines.end()) {
        fines[memberID]->displayFineDetails();
    } else {
        std::cout << "No fine found for Member ID " << memberID << std::endl;
    }
}

void FineService::clearFine(int memberID) {
    if (fines.find(memberID) != fines.end()) {
        delete fines[memberID];
        fines.erase(memberID);
        std::cout << "Fine cleared for Member ID " << memberID << std::endl;
    } else {
        std::cout << "No fine found for Member ID " << memberID << std::endl;
    }
}

void FineService::displayAllFines() {
    std::cout << "All Fines in Library:\n";
    for (auto& fine : fines) {
        fine.second->displayFineDetails();
    }
}
