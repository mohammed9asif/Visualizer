async function insertionsort(){

    let bars = document.querySelectorAll(".flex-item");
    let n = bars.length;

    for(let i=1;i<n;i++){

        let value = bars[i].style.height;
        let j = i-1;
        await delayTime();
        bars[i].style.background = 'blue';
        while(j>=0 && parseInt(bars[j].style.height)>parseInt(value)){
            if(stop_sorting==true)
                return;
            await delayTime();
            bars[j].style.background = 'white';
            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].style.background = 'green';
            j = j -1 ;
        }


        await delayTime();
        bars[j+1].style.height = value;
        bars[i].style.background = '#ee088a';
        for (let k = 0; k <= i; k++) {
           
            bars[k].style.background = 'green'; // Mark elements as sorted
        }

    }


    
}

let btn_insertionsort = document.querySelector("#insertion-sort");

btn_insertionsort.addEventListener("click",(event)=>{
    insertionsort();
    disbaleSortingButtons();
    console.log("clicked on insertionsort");
});