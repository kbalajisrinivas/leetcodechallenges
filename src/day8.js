S = "ab#c"

T = "ad#c"

// have a pointer at S and T. 
```
move T to the right by 1 position when there is a match between S and T. 

for S, you keep going until you find a match or when the number of characters are more than # 
let's consider this example.

S = "a##c", T = "#a#c"

S = "a##c"
T="a#c"

need a strategy to see where to stop processing T
a#c, stop at c
ab##c#d, stop at d 


min stack -- push, pop 
top(), getmin(), pop() -- should take constant time

questions to ask?
can you use 2 stacks or different datastructures like stack and queue

constant time doesn't mean, always O(1), it can also be O(2) or some constant time. 


```