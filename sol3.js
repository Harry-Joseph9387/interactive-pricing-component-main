let slider1=document.querySelector(".sliderinput1");
let slider2=document.querySelector(".sliderinput2");
let pageview=document.querySelector(".pageviews");
let price=document.querySelector(".price");
let pageviews=['10k','50k','100k','500k','1M'];
let checkbox=document.querySelector('.check');
let prices=[8,12,16,24,36]
let discount=true;
let val=0;
function check(){
    console.log(discount);
    if(discount){
        discount=false;
    }
    else{
        discount=true;
    }
}
function update1(){
    let val=slider1.value;
    slider1.style.background=`linear-gradient(to right,
        hsl(174, 77%, 80%) ${val*25}%,
        hsl(223, 50%, 87%) 0%`;
    pageview.innerHTML=pageviews[val]+'Pageviews';
    if(discount){
        price.innerHTML=prices[val]*0.75;
    }
    else{
        price.innerHTML=prices[val];
    }
}
function update2(){
    let val=slider2.value;
    slider2.style.background=`linear-gradient(to right,
        hsl(174, 77%, 80%) ${val*25}%,
        hsl(223, 50%, 87%) 0%`;
    pageview.innerHTML=pageviews[val]+'Pageviews';
    if(discount){
        price.innerHTML=prices[val]*0.75;
    }
    else{
        price.innerHTML=prices[val];
    }
}

slider1.addEventListener('input',update1);
slider2.addEventListener('input',update2);
checkbox.addEventListener('input',check);
