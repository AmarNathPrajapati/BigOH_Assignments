#ifndef MEMBERSERVICE_H
#define MEMBERSERVICE_H

#include <iostream>
#include <unordered_map>
#include "Member.h"

class MemberService {
private:
    std::unordered_map<int, Member*> members; // MemberID -> Member Object

public:
    void registerMember(int memberID, std::string name, std::string email);
    void removeMember(int memberID);
    Member* searchMemberByID(int memberID);
    void displayAllMembers();
    bool canMemberCheckout(int memberID);
    void payMemberFine(int memberID, double amount);
};

#endif
