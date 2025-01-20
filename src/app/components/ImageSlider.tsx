import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ImageSlider = ({ images }: { images: string[] }) => {
  // Product images state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

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
            className="h-48 md:h-60 lg:h-72 w-auto rounded-md cursor-pointer"
            onClick={() => setDialogOpen(true)}
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

      {/* Full-size Image Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-screen-lg w-full p-0 bg-black/90 [&>button]:text-white [&>button]:font-bold [&>button]:p-1 [&>button]:bg-black/90 [&>button]:top-4 [&>button]:right-4">
          <div className="relative flex items-center justify-center min-h-96">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt={`Full size image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="rounded-md object-fill max-h-[80vh]"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full"
                  >
                    <ChevronLeft className="text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full"
                  >
                    <ChevronRight className="text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageSlider;
