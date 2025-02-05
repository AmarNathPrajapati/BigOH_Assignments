#include "MemberService.h"

void MemberService::registerMember(int memberID, std::string name, std::string email) {
    if (members.find(memberID) == members.end()) {
        members[memberID] = new Member(memberID, name, email);
        std::cout << "Member registered successfully: " << name << std::endl;
    } else {
        std::cout << "Member with ID " << memberID << " already exists!" << std::endl;
    }
}

void MemberService::removeMember(int memberID) {
    if (members.find(memberID) != members.end()) {
        delete members[memberID];
        members.erase(memberID);
        std::cout << "Member removed successfully. ID: " << memberID << std::endl;
    } else {
        std::cout << "Member with ID " << memberID << " not found!" << std::endl;
    }
}

Member* MemberService::searchMemberByID(int memberID) {
    if (members.find(memberID) != members.end()) {
        return members[memberID];
    }
    std::cout << "Member with ID " << memberID << " not found!" << std::endl;
    return nullptr;
}

void MemberService::displayAllMembers() {
    std::cout << "Library Members:\n";
    for (auto& member : members) {
        member.second->displayMemberInfo();
    }
}

bool MemberService::canMemberCheckout(int memberID) {
    if (members.find(memberID) != members.end()) {
        return members[memberID]->getFines() == 0; // अगर fine है तो checkout नहीं कर सकता
    }
    return false;
}

void MemberService::payMemberFine(int memberID, double amount) {
    if (members.find(memberID) != members.end()) {
        members[memberID]->payFines(amount);
        std::cout << "Fine of " << amount << " paid successfully for Member ID: " << memberID << std::endl;
    } else {
        std::cout << "Member with ID " << memberID << " not found!" << std::endl;
    }
}
