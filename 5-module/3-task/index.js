function initCarousel() {

  let rightBtn = document.querySelector('.carousel__arrow_right');
  let leftBtn = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let image = carousel.querySelectorAll('.carousel__slide');
  let widthCarousel = carousel.offsetWidth;

  let position = 0;

  if(position == 0) {
    leftBtn.style.display = 'none';
  }

  leftBtn.onclick = function() {
    position += widthCarousel;
    position = Math.min(position, 0);
    carousel.style.transform = `translateX(${position}px)`;

    if(position == 0) {
      leftBtn.style.display = 'none';
    }
    rightBtn.style.display = '';
   }

 rightBtn.onclick = function() {
  let maxPosition = -widthCarousel*(image.length-1);
  
  position -=widthCarousel;
  position = Math.max(position, maxPosition);
  carousel.style.transform = `translateX(${position}px)`;

  if (position == maxPosition) {
    rightBtn.style.display = 'none';
  }
  leftBtn.style.display = '';
 }
}
