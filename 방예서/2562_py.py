# 2562번 최댓값 python
import sys
input = sys.stdin.readline
n = 9

arr = [int(input()) for _ in range(n)]

maxnum = max(arr)
result = arr.index(maxnum) + 1

#for i in range(n):
#   if (maxnum == arr[i]):
#      result = i+1

print(maxnum)
print(result)
