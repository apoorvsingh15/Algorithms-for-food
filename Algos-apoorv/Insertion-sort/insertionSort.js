const InsertionSort = (arr, n) => {
    let i, value, hole;
    for(i=0; i<n-1; i++){
        value = arr[i];
        hole = i;
        while(hole > 0 && arr[hole-1] > value){
            arr[hole] = arr[hole-1];
            hole = hole - 1;
        }
        arr[hole] = value;
    }
    for(i=0; i<n-1; i++){
        console.log(arr[i])
    }
}

InsertionSort([45,12,55,1,23,54,654], 7);


// Need proper documentation