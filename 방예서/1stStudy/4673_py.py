# 4673 셀프 넘버 python


def d(n):
    result = n
    while n > 0:
        result += (n%10)
        n //= 10
    return result

#set은 중복 제거
s = set(range(0, 10000))
notSelf = set()

for i in range(0, 10000):
    notSelf.add(d(i))

self = sorted(s-notSelf)

for i in range(len(self)):
    print(self[i])
