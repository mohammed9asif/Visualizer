function swap(ele1,ele2){

    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}
let randomArray = [];

function createNewArray(size=30){

    for(let i =0 ;i<size;i++){
        let num = Math.floor(Math.random()*300);
        randomArray[i] = num;
    }

    
}
function deleteBars(){
    const input_bars = document.querySelector("#input-bars");
    input_bars.innerHTML=" "
}
function createBarsWithArray(size=30){
    
    const input_bars = document.querySelector("#input-bars");
    console.log(randomArray);
    for(let i = 0;i<size;i++){
        const bar = document.createElement("div");
        bar.style.height = `${randomArray[i]}px`;
        bar.classList.add("flex-item");
        console.dir(bar);
        input_bars.appendChild(bar);
        
    }
 
}

let delay =220;
let speed_input = document.querySelector("#input-speed");

function delayTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`delaying ${delay} mili sec`);
            resolve('');
        },delay);
    });
   
}


speed_input.addEventListener('change',(event)=>{
    let speed = parseInt(speed_input.value);
    delay = 220 - speed;
    console.log(speed,delay);
})

let size_input = document.querySelector("#input-size");

let btn_newArray = document.querySelector("#new_array");
btn_newArray.addEventListener("click",(event)=>{
    console.log(size_input.value);
    let sizeofarray = size_input.value;
    deleteBars();
    createNewArray(sizeofarray);
    createBarsWithArray(sizeofarray);
    enableSortingButtons();
})


function disbaleSortingButtons(){
    console.log("disabling the buttons");
    document.querySelector("#bubble-sort").disabled =true;
    btn_selectionsort.disabled=true;
    btn_quicksort.disabled=true;
    btn_heapsort.disabled=true;
    btn_insertionsort.disabled=true;
    btn_mergesort.disabled=true;
}

function enableSortingButtons(){
    console.log("disabling the buttons");
    document.querySelector("#bubble-sort").disabled =false;
    btn_selectionsort.disabled=false;
    btn_quicksort.disabled=false;
    btn_heapsort.disabled=false;
    btn_insertionsort.disabled=false;
    btn_mergesort.disabled=false;
    stop_sorting = false;
}

let stop_sorting = false;
let stop_sort = document.querySelector("#stop_sorting");
stop_sort.addEventListener("click",(event)=>{
    console.log("inside stop");
    stop_sorting = true;
    
})
createNewArray();
createBarsWithArray();