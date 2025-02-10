CC = g++
CFLAGS = -std=c++11 -Wall

SRC = main.cpp \
      services/AdminService.cpp services/AuthenticationService.cpp services/CommentService.cpp \
      services/ContentCreatorService.cpp services/LikeService.cpp services/PlaylistService.cpp \
      services/SubscriptionService.cpp services/UserService.cpp services/VideoService.cpp \
      services/ViewerService.cpp \
      db/Db.cpp \
      utils/Utils.cpp \
      webApp/WebApp.cpp

TARGET = cms.exe

all:
	$(CC) $(CFLAGS) $(SRC) -o $(TARGET)

clean:
	rm -f $(TARGET)



