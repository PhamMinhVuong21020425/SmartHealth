import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images }: { images: string[] }) => {
  // Product images state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slider handlers
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative flex justify-center items-center overflow-hidden">
        <div className="px-16">
          <Image
            src={images[currentImageIndex]}
            alt={`Product Image ${currentImageIndex + 1}`}
            width={500}
            height={500}
            className="h-48 md:h-60 lg:h-72 w-auto rounded-md"
          />
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200/50 hover:bg-green-100 p-2 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200/50 hover:bg-green-100 p-2 rounded-full"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Image Preview Thumbnails */}
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-5 gap-6 px-8">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={60}
              height={60}
              onClick={() => selectImage(index)}
              className={`
                cursor-pointer
                border-2
                rounded
                ${
                  currentImageIndex === index
                    ? "border-green-500 rounded p-1.5"
                    : "border-transparent"
                }
                hover:opacity-75
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
