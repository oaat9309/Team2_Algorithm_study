# X보다 작은 수 10871 python

n, x = map(int, input().split())
a = list(map(int, input().split()))
b = list()

for i in range(0, n):
    if a[i] < x:
        print(a[i], end= ' ')
