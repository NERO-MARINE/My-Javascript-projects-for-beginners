let images = ['./imgs/btcbanner.jpg', './imgs/ethbanner.jpg','./imgs/supportbanner.jpg','./imgs/food15.jpg','./imgs/food13.jpg',];

let i = 0;

function changeImg(){
    document.querySelector('img').src = images[i];
    if(i < images.length -1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout(changeImg, 2000)
}
changeImg();
// window.onload = changeImg;