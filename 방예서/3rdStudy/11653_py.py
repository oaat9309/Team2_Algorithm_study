# 백준 11653 소인수분해

import sys
input = sys.stdin.readline

n = int(input())

def factorization(num):
   
    for i in range(2, num+1):
        while (num % i == 0):
            print(i)
            num //= i

factorization(n)

