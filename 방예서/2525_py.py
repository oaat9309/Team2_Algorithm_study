# 2525번 오븐 시계 python
import sys
input = sys.stdin.readline

h, m = map(int, input().split())

make = int(input())
makeh = 0
makem = 0

if make >= 60:
    makeh = make // 60
    makem = make % 60
else:
    makem = make

makeh += h
makem += m

if makem >= 60:
    makeh += (makem//60)
    makem %= 60

if makeh >= 24:
    makeh %= 24

print(makeh, makem)
