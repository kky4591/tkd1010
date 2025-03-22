import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-400">{siteConfig.contact.postalCode}</p>
            <p className="text-gray-400">{siteConfig.contact.address}</p>
            <p className="text-gray-400">電話: {siteConfig.contact.phone}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">練習時間</h3>
            <p className="text-gray-400">第２・４ 日曜日: {siteConfig.hours.sunday}<br /> ※月２回のレッスンとなります</p>
          </div>
{/* SNSリンク
          <div>
            <h3 className="text-xl font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div> 
*/}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;