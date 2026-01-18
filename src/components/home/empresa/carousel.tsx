import Image from "next/image";

const imagesArray = [
  { alt: "1", src: "/images/planning.jpg" },
  { alt: "2", src: "/images/obrero.jpg" },
  { alt: "3", src: "/images/planos.jpg" },
  { alt: "1", src: "/images/planning.jpg" },
  { alt: "2", src: "/images/obrero.jpg" },
  { alt: "3", src: "/images/planos.jpg" },
];

const Carousel = () => {
  return (
    <div className="slider flex flex-row h-52 md:h-64 w-full overflow-hidden relative before:bg-gradient-to-l before:from-transparent before:to-white before:content-[''] before:h-full before:absolute before:w-[15%] before:z-[2] before:left-0 before:top-0 after:bg-gradient-to-r after:from-transparent after:to-white after:content-[''] after:h-full after:absolute after:w-[15%] after:z-[2] after:right-0 after:top-0">
      <div className="animate-carousel-scroll flex flex-row h-full w-[200%] hover:[animation-play-state:paused]">
        {imagesArray.map((item, i) => (
          <div
            key={i}
            className="relative min-w-full md:min-w-[50%] xl:min-w-[33.33%] h-full transition-transform duration-500 hover:scale-110"
          >
            <Image
              key={i}
              alt={item.alt}
              src={item.src}
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
