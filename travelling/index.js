var swiper=new Swiper(".home_slider",{
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
}
    );

    var swiper=new Swiper(".reviews_slider",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
        640:{
        slidesPerViews:1,
        },
        768:{
        slidesPerViews:2,
        },
        1024:{
        slidesPerViews:3,
        },

    },

   
}
    );


    let loadmorebtn = document.querySelector('.load_more .btn');
let currentitem = 3;

loadmorebtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];

    // Reveal the next 3 hidden boxes
    for (let i = currentitem; i < currentitem + 3 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentitem += 3;

    // Hide the "Load More" button if no more items are left
    if (currentitem >= boxes.length) {
        loadmorebtn.style.display = 'none';
    }
};
