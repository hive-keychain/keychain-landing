import React from 'react';
import { Twitter, Github, MessageSquare } from 'lucide-react';
import { FaXTwitter, FaGithub, FaDiscord, FaHive } from 'react-icons/fa6'; // Importamos los iconos necesarios


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="col-2 flex items-center text-center mb-4">
              <img src="/favicon.png" className="h-14 pr-5" alt="circle-logo hive keychain" />
              <h3 className="text-xl font-semibold">Hive Keychain</h3>
            </a>
            <p className="text-gray-400 mb-4">
              Your secure gateway to the Hive ecosystem
            </p>
            <div className="flex space-x-4 ">
              <a href="https://x.com/hivekeychain" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <FaXTwitter size={24} />
              </a>
              <a href="https://github.com/hive-keychain" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <FaGithub size={24} />
              </a>
              <a href="https://discord.gg/M3xsZXSVQK" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <FaDiscord size={24} />
              </a>
              <a href="https://peakd.com/@keychain" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                <FaHive size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Important links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/fees" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Fees
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.npmjs.com/package/keychain-sdk" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Keychain SDK
                </a>
              </li>
              <li>
                <a href="https://play.hive-keychain.com/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Keychain Playground
                </a>
              </li>
              <li>
                <a href="https://github.com/hive-keychain" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://multisig-doc.hive-keychain.com/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Hive Multisig
                </a>
              </li>
              <li>
                <a href="https://qr.hive-keychain.com/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Hive QR Code Generator
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Download</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  iOS App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Android App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Browser Extensions
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hive Keychain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;