# Big O of Intermediate Sorting Algorithms

| Algorithm       |Time complexity (Best) | Time complexity (Average) | Time complexity (Worst) | Space complexity |
|-----------------|-----------------------|---------------------------|-------------------------|------------------|
| Merge sort      | O(nlogn)              | O(nlogn)                  | O(nlogn)                | O(n)             |
| Quick sort      | O(n)                  | O(n^2)                    | O(n^2)                  | O(1)             |
| Radix     sort  | O(n^2)                | O(n^2)                    | O(n^2)                  | O(1)             |

Faster sorts can improve time complexity from O(n^2)  to O(nlogn).
There's a trade off between efficiency and simplicity. The more efficient algorithms are much less simple and generally take longer to understand.

Merge sort does not care about the ordering/ organization of the data hence it has the same time complexity regardless of the data passed to it.

From the initial input array, there are O(n) comparisons per decomposition into each sub array. There are O(logn) decompositions.
