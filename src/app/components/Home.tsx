"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const HomePage = () => {
  // Active navigation state
  const [activeNav, setActiveNav] = useState("TRANG CHỦ");

  // Product images state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [
    "/images/product.png",
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product5.png",
    "/images/product6.png",
  ];

  // Navigation handler
  const handleNavClick = (item: string) => {
    setActiveNav(item);
  };

  // Image slider handlers
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar with Icons */}
      <div className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-8">
          <div className="flex space-x-8 items-center">
            <Link href="#" className="hover:opacity-80 flex items-center">
              <FaFacebook className="mr-2" />
              Facebook
            </Link>
            <Link href="#" className="hover:opacity-80 flex items-center">
              <FaYoutube className="mr-2" />
              Youtube
            </Link>
            <Link href="#" className="hover:opacity-80 flex items-center">
              <FaTiktok className="mr-2" />
              Tiktok
            </Link>
            <Link href="#" className="hover:opacity-80 flex items-center">
              <SiShopee className="mr-2" />
              Shopee
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="shadow-md mb-6">
        <div className="container mx-auto py-4 px-8">
          <div className="flex justify-between items-center">
            <div className="text-green-600">
              <div className="flex items-center space-x-2 mb-2">
                <Image
                  className="rounded-full bg-green-100"
                  src="/images/logo.png"
                  width={30}
                  height={30}
                  alt="Logo"
                />
                <div className="text-3xl font-bold">A2H</div>
              </div>
              <div className="text-sm font-normal">Smart medical devices</div>
            </div>

            <nav className="flex space-x-6">
              {["TRANG CHỦ", "GIỚI THIỆU", "SẢN PHẨM", "TEAM", "LIÊN HỆ"].map(
                item => (
                  <Link
                    key={item}
                    href="#"
                    onClick={() => handleNavClick(item)}
                    className={`
                    hover:text-green-700
                    ${
                      activeNav === item
                        ? "text-green-600 font-bold"
                        : "text-black"
                    }
                  `}
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Slider */}
          <div className="relative">
            <div className="relative flex justify-center items-center overflow-hidden">
              <div className="px-16">
                <Image
                  src={productImages[currentImageIndex]}
                  alt={`Product Image ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
                  className="h-96 w-auto rounded-md"
                />
              </div>
              {productImages.length > 1 && (
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
            <div className="flex items-center justify-center space-x-2 mt-6">
              {productImages.map((image, index) => (
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

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Hoạt huyết dưỡng não</h1>
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              Hệ thần kinh
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-semibold mb-2">Trình bày</h2>
                <p>Hộp 1, 2, 5 vỉ x 20 viên bao phim.</p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Chỉ định</h2>
                <p className="mb-2">Phòng và điều trị các bệnh sau:</p>
                <ul className="list-decimal ml-5 space-y-2">
                  <li>
                    Suy giảm trí nhớ, căng thẳng thần kinh, kém tập trung.
                  </li>
                  <li>
                    Hội chứng tiền đình với các biểu hiện: đau đầu, hoa mắt,
                    chóng mặt, mất thăng bằng.
                  </li>
                  <li>
                    Giảm chức năng não bộ: giảm trí nhớ, suy nhược thần kinh.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-green-50 p-4 rounded-lg flex items-center justify-center space-x-2">
              <Phone className="text-green-600" />
              <span className="text-gray-700">LIÊN HỆ</span>
              <span className="text-green-600 font-bold text-xl">
                036 123 4567
              </span>
              <span className="text-gray-700">ĐỂ BIẾT THÊM THÔNG TIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
