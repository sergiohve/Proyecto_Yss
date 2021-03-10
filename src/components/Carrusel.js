import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const items = [
  {
    src: require("../assets/projects_images/Banners carrusel_01.png"),
    altText: 'Imagen 1',
    caption: ''
  },
  {
    src:  require("../assets/projects_images/Banners carrusel-02.png"),
    altText: 'Imagen 2',
    caption: ''
  },
  {
    src:  require("../assets/projects_images/Banners carrusel-03.png"),
    altText: 'Imagen 3',
    caption: ''
  },
  {
    src:  require("../assets/projects_images/Banners carrusel-04.png"),
    altText: 'Imagen 4',
    caption: ''
  },
  {
    src:  require("../assets/projects_images/Banners carrusel-05.png"),
    altText: 'Imagen 5',
    caption: ''
  },
  {
    src:  require("../assets/projects_images/Banners carrusel-06.png"),
    altText: 'Imagen 6',
    caption: ''
  }
];

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="235px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
     
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <div style={{marginLeft: "-100px"}}>
      <CarouselControl direction="prev"  directionText="Previous" onClickHandler={previous} />
      </div>
      
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrusel;