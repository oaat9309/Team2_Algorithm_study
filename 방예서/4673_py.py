# 4673 셀프 넘버 python

import sys
input = sys.stdin.readline


def d(n):
    if n > 100:
        return
    result = n
    while n > 0:
        result += (n%10)
        n //= 10
    print(d(result))
    return result

result = []

d(91)


for i in range(1, 100):
    if d(i) not in result:
        result.append(d(i))


