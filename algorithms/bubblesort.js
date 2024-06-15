 async function bubblesort() {
  let bars = document.querySelectorAll(".flex-item");

  let n = bars.length;
    console.log(bars.length)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if(stop_sorting==true)
        return;
       bars[j].style.background='white';
       bars[j+1].style.background='white';
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await delayTime();
        swap(bars[j], bars[j + 1]);
      }
      else{
        await delayTime();
      }

      bars[j].style. background= '#ee088a';
      bars[j+1].style.background='#ee088a';

    }
    bars[n-i-1].style.background='green';
  }
}


let btn_bubblesort = document.querySelector("#bubble-sort");

btn_bubblesort.addEventListener("click",(event)=>{
   
    disbaleSortingButtons();
    bubblesort();
    console.log("clicked on bubblesort");
})

