# 10250 ACM 호텔 python

import sys
input = sys.stdin.readline

t = int(input())


def yourRoomIs(floor, room, customer):

    if (customer % floor) == 0:
        yy = floor
        xx = customer // floor
    else:
        yy = customer % floor
        xx = (customer // floor) + 1

    roomNum = (yy * 100) + xx

    return roomNum

for _ in range(t):
    h, w, n = map(int, input().split())
    print(yourRoomIs(h, w, n))
