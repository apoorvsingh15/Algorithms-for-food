const SelectionSort = (arr, length) => {
    let i,j;                                                
    // looping variables   
    for(i = 0; i<=length-2; i++){ 
        // looping from 0th index to length-2 index
        // This is because last element will already
        // sort itself out                                      
        minimum_element = i;
        // initially setting first element as the minimum element 
        for(j = i+1; j<=length-1; j++){    
            // traversing the rest of the array
            if(arr[j] < arr[minimum_element]){ 
                minimum_element = j;
                // if a min element is found, it is set to minimum_element
            }
        }
        Swap(arr, i, minimum_element); 
        // swap function for swaping elements using third variable
    }
    for(i = 0; i<= length-1; i++)
        console.log(arr[i])
        //printing the array
}

let Swap = (a, index, min_element) => {             // function to swap the elements
    let temp;
    temp = a[index];
    a[index] = a[min_element];
    a[min_element] = temp;
}

SelectionSort([1,40, 20,60,10,55,65,77,11,01,02], 10);  // function call


// Time Complexity : o(n^2)
// Auxillary Space Complexity : o(n)