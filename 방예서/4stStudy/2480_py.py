# 백준 2480 주사위 세개 python

import sys
input = sys.stdin.readline


a, b, c = map(int, input().split())

result = 0

if a == b == c:
    result = 10000 + 1000 * a
elif a == b or b == c or c == a:
    if a == b:
        result = 1000 + 100 * a
    else:
        result = 1000 + 100 * c
else:
    result = 100 * max(a, b, c)

print(result)

