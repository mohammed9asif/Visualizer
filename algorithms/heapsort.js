async function heapify(bars,size,index){

    let largest = index;

    let left = 2*index+1;
    let right = 2*index+2;

    if(stop_sorting==true)
        return;

    console.log(largest,left,right);
    if(left<size && parseInt(bars[left].style.height) > parseInt(bars[largest].style.height)){
        largest = left;
    }

    if(right<size && parseInt(bars[right].style.height) > parseInt(bars[largest].style.height)){
        largest = right;
    }

    if(index!=largest){
        let temp = bars[largest];
        bars[largest] = bars[index];
        bars[index] = temp;
        swap(bars[index],bars[largest]);
        await heapify(bars,size,largest);
    }


}

async function heapsort(bars,n){

    // Rearranging the array
    for(let i = Math.round(n/2-1);i>=0;i--){
       await heapify(bars,n,i);
    }


    for(let i = n -1 ; i>0;i--){

        let temp = bars[0];
        bars[0] = bars[i];
        bars[i] = temp;
        bars[0].style.background = 'cyan';
        bars[i].style.background = 'green';
        swap(bars[0],bars[i]);
        if(stop_sorting==true)
            return;
        await delayTime();

       await heapify(bars,i,0);
    }
}

let btn_heapsort = document.querySelector("#heap-sort");

btn_heapsort.addEventListener("click",async (event)=>{
    let bars = document.querySelectorAll(".flex-item");
    disbaleSortingButtons();
    await heapsort(bars,parseInt(bars.length));
    bars[0].style.background = 'green';
    console.log("clicked on heapsort");
})