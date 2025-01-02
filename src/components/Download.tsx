import React from 'react';
import { Apple, Chrome, Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Download Hive Keychain
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
            <a
              href="#"
              className="flex items-center space-x-3 bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors w-full"
            >
              <Apple size={24} />
              <span>Download for iOS</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors w-full"
            >
              <Download size={24} />
              <span>Download for Android</span>
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Browser Extensions</h3>
            <a
              href="#"
              className="flex items-center space-x-3 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              <Chrome size={24} />
              <span>Chrome Extension</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors w-full"
            >
              <Chrome size={24} />
              <span>Firefox Extension</span>
            </a>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-600">
          Start managing your Hive accounts securely today!
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;