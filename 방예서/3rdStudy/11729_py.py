# 백준 11729 하노이 탑 이동 순서

import sys
input = sys.stdin.readline

n = int(input())

def hanoi(n, first, mid, last):
    if n == 1:
        move(first, last)
        return
    hanoi(n-1, first, last, mid)
    move(first, last)
    hanoi(n-1, mid, first, last)

def move(a, b):
    print(a, b)

def count(n):
    if n == 1:
        return 1
    else:
        return 2*count(n-1) + 1

print(count(n))
hanoi(n, 1, 2, 3)
