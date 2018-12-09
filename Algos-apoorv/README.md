# Selection Sort

A selection sort algorithm sorts array repeatedly from unsorted path.

Time Complexity : O(n^2)
Space Complexity : O(n)

## Pseudo-Code

```

SelectionSort(A,n){
for i <- 0 to n-2{
i_min <- i
for j <- i+1 to n-1{
if(A[j] < A[i_min])
i_min <- j
}
temp <- A[i]
A[i] <- A[i_min]
A[i_min] <- temp
}
}

```
