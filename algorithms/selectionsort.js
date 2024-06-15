async function selectionSort(){

    let bars = document.querySelectorAll(".flex-item");
    let n = bars.length;
    for(let i=0;i<n;i++){

        let minIndex = i;
        bars[i].style.background = 'blue';
        for(let j=i+1;j<n;j++){
            if(stop_sorting==true)
                return;
            bars[j].style.background='white';
            if(parseInt(bars[j].style.height)<parseInt(bars[minIndex].style.height)){
                if(minIndex!=i)
                    bars[minIndex].style.background = '#ee088a';
                await delayTime();
                minIndex = j;
                bars[j].style.background = '#DC5F00';
            }
            else{
                await delayTime();
            }
            if(j!=minIndex || j==n-1)
            bars[j].style.background='#ee088a';
        }
        
        await delayTime();
        swap(bars[i],bars[minIndex]);
        bars[i].style.background = 'green';

    }
}

let btn_selectionsort = document.querySelector("#selection-sort");

btn_selectionsort.addEventListener("click",(event)=>{
    disbaleSortingButtons();
    selectionSort();
    console.log("clicked on selectionsort");
})