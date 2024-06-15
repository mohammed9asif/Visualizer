async function merge(bars,start,mid,end){
    console.log('In merge()');
    
    let n = mid-start+1;
    let m = end-mid;
    console.log(n, m, start , mid ,end);
    let leftArr = new Array(n);
    let rightArr = new Array(m);
    if(stop_sorting==true)
        return;
    for(let i = 0;i<n;i++){
        bars[start+i].style.background = 'blue';
        await delayTime();
        leftArr[i] = bars[start+i].style.height;
        //bars[start+i].style.background = '#ee088a';
    }
    for(let i=0;i<m;i++){
        bars[mid+1+i].style.background = '#DC5F00';
        await delayTime();
        rightArr[i] = bars[mid+1+i].style.height;
        //bars[mid+1+i].style.background = '#ee088a';
    }

    let i = 0 , j =0 , k=start ; 

    while(i<n && j < m){

        if(parseInt(leftArr[i])<=parseInt(rightArr[j])){
            await delayTime(); 
            bars[k++].style.height = leftArr[i++];
        }
        else{
            await delayTime();
            bars[k++].style.height = rightArr[j++];
        }
    }

    while(i<n){
        await delayTime();
        bars[k++].style.height = leftArr[i++];
    }

    while(j<m){
        await delayTime();
        bars[k++].style.height = rightArr[j++];
    }

}
async function mergesort(bars,start,end){

    if(start<end){
        let mid = start +Math.floor((end-start)/2);
        console.log(start,mid,end);
        await mergesort(bars,start,mid);
        await mergesort(bars,mid+1,end);
        await merge(bars,start,mid,end);
    }
}

let btn_mergesort = document.querySelector("#merge-sort");

btn_mergesort.addEventListener("click",(event)=>{
    let bars = document.querySelectorAll(".flex-item");
    disbaleSortingButtons();
    mergesort(bars,0,parseInt(bars.length)-1);
    console.log("clicked on mergesort");
})