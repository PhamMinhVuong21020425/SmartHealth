"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { SiShopee } from "react-icons/si";

import ImageSlider from "./ImageSlider";

const HomePage = ({ productImages }: { productImages: string[] }) => {
  // Active navigation state
  const [activeNav, setActiveNav] = useState("TRANG CHỦ");

  // Tab images state
  const [activeTabImages, setActiveTabImages] = useState(0);

  const tabs = [
    {
      label: "Sản phẩm",
      icon: <AiOutlineProduct />,
    },
    {
      label: "Nhận xét",
      icon: <PiCertificate />,
    },
  ];

  const certificateImages = [
    "/images/1.certificate.jpg",
    "/images/2.certificate.jpg",
  ];

  // Navigation handler
  const handleNavClick = (item: string) => {
    setActiveNav(item);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar with Icons */}
      <div className="bg-green-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-24">
          <div className="flex space-x-8 items-center">
            <Link
              href="https://www.facebook.com/groups/853758016650047"
              target="_blank"
              className="hover:opacity-80 flex items-center"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </Link>
            <Link
              href="https://www.youtube.com/@Trungganhh2330/featured"
              target="_blank"
              className="hover:opacity-80 flex items-center"
            >
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
        <div className="container mx-auto py-4 px-24">
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
      <div className="container mx-auto px-24 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start justify-between">
          <div className="w-full mx-auto">
            {/* Tab List */}
            <div className="flex border-b">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTabImages(index)}
                  className={`flex items-center gap-2 px-4 py-3 text-md font-medium transition-colors duration-200 ${
                    activeTabImages === index
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTabImages === index ? "block" : "hidden"
                } space-y-4`}
              >
                {/* Sample content specific to each tab */}
                <div className="mt-8">
                  {index === 0 && <ImageSlider images={productImages} />}
                  {index === 1 && <ImageSlider images={certificateImages} />}
                </div>
              </div>
            ))}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Thiết bị y tế thông minh đa chức năng
            </h1>
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
              A2H
            </div>

            <div className="space-y-6 text-justify">
              <div>
                <h2 className="text-lg font-semibold mb-2">Giới thiệu</h2>
                <p>
                  Chào các bạn! Hôm nay, chúng tôi rất vui mừng giới thiệu đến
                  bạn một sản phẩm đột phá trong lĩnh vực y tế:{" "}
                  <span className="font-bold">
                    Thiết bị y tế thông minh đa chức năng! 🩺✨
                  </span>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Chức năng</h2>
                <p className="mb-2">
                  {" "}
                  Một thiết bị tích hợp được 7 chức năng đo chỉ số sức khỏe bao
                  gồm:
                </p>
                <ul className="list-decimal ml-5 space-y-2">
                  <li>
                    <span className="font-bold">Đo Huyết Áp:</span> Theo dõi
                    huyết áp chính xác, giúp phát hiện sớm các vấn đề tim mạch.
                  </li>
                  <li>
                    <span className="font-bold">Điện Tâm Đồ (ECG):</span> Giám
                    sát hoạt động điện của tim, phát hiện rối loạn nhịp tim kịp
                    thời.
                  </li>
                  <li>
                    <span className="font-bold">Đo Nhịp Tim:</span> Theo dõi
                    nhịp tim liên tục, giúp bạn điều chỉnh hoạt động thể chất.
                  </li>
                  <li>
                    <span className="font-bold">
                      Đo Nồng Độ Oxy Trong Máu (SpO2):
                    </span>{" "}
                    Đảm bảo cơ thể nhận đủ oxy, rất quan trọng cho sức khỏe hô
                    hấp.
                  </li>
                  <li>
                    <span className="font-bold">Đo Nhiệt Độ Cơ Thể:</span> Phát
                    hiện sớm dấu hiệu sốt hoặc nhiễm trùng.
                  </li>
                  <li>
                    <span className="font-bold">Đo Độ pH:</span>
                    Theo dõi tình trạng axit-bazơ trong cơ thể, hỗ trợ sức khỏe
                    tiêu hóa.
                  </li>
                  <li>
                    <span className="font-bold">Đo Tiểu Đường (Glucose):</span>{" "}
                    Giúp bạn theo dõi mức đường huyết, rất cần thiết cho người
                    mắc bệnh tiểu đường.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-green-50 p-4 rounded-lg flex items-center justify-center space-x-2">
              <Phone className="text-green-600" />
              <span className="text-gray-700">LIÊN HỆ</span>
              <span className="text-green-600 font-bold text-xl">
                022 865 99998
              </span>
              <span className="text-gray-700">ĐỂ ĐẶT HÀNG NGAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
