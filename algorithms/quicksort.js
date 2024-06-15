async function quicksort(bars,start,end){
    if(start>=end){
        return;
    }

    let pivot = await partition(bars,start,end);
    if(stop_sorting==true)
        return;

    await quicksort(bars,start,pivot);
    await quicksort(bars,pivot+1,end);
}
async function partition(bars,start,end){

    console.log('Inside partition');
    let pivot = bars[start].style.height;
    let count =0;
    if(stop_sorting==true)
        return;
    for(let i=start+1;i<=end;i++){
        if(parseInt(bars[i].style.height)<=parseInt(pivot))
            count++;
    }

    let pivotIndex = start+count;
    console.log(pivot,start,end,pivotIndex);
    swap(bars[start],bars[pivotIndex]);

    let left =start,right = end;

    while(left<pivotIndex && right >pivotIndex){

        while(parseInt(bars[left].style.height)<parseInt(pivot))
            {
                left++;
            }
        while(parseInt(bars[right].style.height)>parseInt(pivot))
            {
                right--;
            }
        
        
        if(left<pivotIndex && right > pivotIndex)
        swap(bars[left],bars[right]);
    }

    return pivotIndex;

}

let btn_quicksort = document.querySelector("#quick-sort");

btn_quicksort.addEventListener("click",(event)=>{
    let bars = document.querySelectorAll(".flex-item");
    disbaleSortingButtons();
    quicksort(bars,0,parseInt(bars.length)-1);
    console.log("clicked on quicksort");
})