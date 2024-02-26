[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in array and sorts using quicksort. Below is python code I made to sort array:

import random

def quicksort_iterative(array):

stack = [(0, len(array) - 1)]

while stack:

low, high = stack.pop()

pivot = array[high]
        
i = low - 1

for j in range(low, high):
            
if array[j] <= pivot:
                
i += 1
                
array[i], array[j] = array[j], array[i]

array[i + 1], array[high] = array[high], array[i + 1]
        
pivot_index = i + 1

if pivot_index - 1 > low:
            
stack.append((low, pivot_index - 1))
        
if pivot_index + 1 < high:
            
stack.append((pivot_index + 1, high))

return array

array = [random.randint(-10, 10) for _ in range(5)]

print(array)

array = quicksort_iterative(array)

print(array)



## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

O(N2). This occurs when a poorly positioned pivot is chosen constantly, leading to unbalanced partitions. In the worst-case scenario, each recursive call only reduces the size of the unsorted portion of the array by one element.
