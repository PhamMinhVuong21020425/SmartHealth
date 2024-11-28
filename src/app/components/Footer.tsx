import React from "react";
import Image from "next/image";

import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 mx-32">
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="text-green-600">
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full bg-green-100"
                src="/images/logo.png"
                width={25}
                height={25}
                alt="Logo"
              />
              <div className="text-2xl font-bold">A2H</div>
            </div>
            <div className="text-sm font-normal mb-4">
              Smart medical devices
            </div>

            <ul className="space-y-2 text-black">
              <li>Tầm nhìn</li>
              <li>Sứ mệnh phát triển</li>
              <li>Đội ngũ sáng tạo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-8">SẢN PHẨM</h3>
            <ul className="space-y-2">
              <li>Thiết bị y tế thông minh đa chức năng</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-8">THÔNG TIN KHÁC</h3>
            <ul className="space-y-2">
              <li>Tin tức</li>
              <li>Phân phối</li>
              <li>Sức khỏe cộng đồng</li>
              <li>Mua hàng trực tuyến</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-8">WEBSITE LIÊN KẾT</h3>
            <ul className="space-y-2">
              <Link
                href="https://www.facebook.com/groups/853758016650047"
                target="_blank"
                className="hover:opacity-80 flex items-center"
              >
                <FaFacebook className="mr-2 text-blue-500" />
                Facebook
              </Link>
              <Link
                href="https://www.youtube.com/@Trungganhh2330/featured"
                target="_blank"
                className="hover:opacity-80 flex items-center"
              >
                <FaYoutube className="mr-2 text-red-500" />
                Youtube
              </Link>
              <Link href="#" className="hover:opacity-80 flex items-center">
                <FaTiktok className="mr-2 text-black" />
                Tiktok
              </Link>
              <Link href="#" className="hover:opacity-80 flex items-center">
                <SiShopee className="mr-2 text-orange-600" />
                Shopee
              </Link>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-t border-green-500 w-5/6" />
      </div>

      <div className="space-y-1">
        <p className="font-bold mb-3">Trường Trung học phổ thông Mỹ Lộc</p>
        <p>
          <span className="font-bold">Địa chỉ:</span> Km số 5, đường 21, phường
          Hưng Lộc, thành phố Nam Định, tỉnh Nam Định.
        </p>
        <p>
          <span className="font-bold">Số điện thoại:</span> 022.865.99998
        </p>
        <p>
          <span className="font-bold">Email:</span> thpt.myloc@namdinh.edu.vn
        </p>
        <p>
          <span className="font-bold">Website: </span>
          <Link
            href="https://thpt-myloc.namdinh.edu.vn"
            className="hover:underline hover:text-blue-600"
          >
            https://thpt-myloc.namdinh.edu.vn
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
