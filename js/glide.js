new Glide('.glide' , {
    type: 'carousel',
    startAt : 0,
    perView: 3,
    gap: 30,
    breakpoint: {
        991: {  //medida de tablet
            perView: 2
        },
        768: {    //medida de tablet para abajo, celu grande 
            perView: 1
        }
    }
}).mount();