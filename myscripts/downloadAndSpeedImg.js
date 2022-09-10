const imgs = document.querySelectorAll('img');

let imgInterval;

imgInterval = setInterval( () => {
    // complit - true\false
    console.log('img 1' + imgs[0].complete);
    console.log('img 2' + imgs[1].complete);
    console.log('img 3' + imgs[2].complete);

    if(imgs[0].complete && imgs[1].complete && imgs[2].complete) {
        clearInterval(imgInterval);

    }
},1);