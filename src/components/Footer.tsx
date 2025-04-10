import { FaDiscord, FaGithub, FaHive, FaXTwitter } from "react-icons/fa6"; // Importamos los iconos necesarios
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#212838] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/" className="col-2 flex items-center text-center mb-4">
              <img
                src="/favicon.png"
                className="h-14 pr-5"
                alt="circle-logo hive keychain"
              />
              <h3 className="text-xl font-semibold">{t("footer.title")}</h3>
            </a>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.links.title")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.links.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.links.terms")}
                </a>
              </li>
              <li>
                <a
                  href="/fees"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.links.fees")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.resources.title")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.npmjs.com/package/keychain-sdk"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.resources.sdk")}
                </a>
              </li>
              <li>
                <a
                  href="https://play.hive-keychain.com/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.resources.playground")}
                </a>
              </li>
              {/* <li>
                <a href="https://github.com/hive-keychain" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                  Github
                </a>
              </li> */}
              <li>
                <a
                  href="https://multisig-doc.hive-keychain.com/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.resources.multisig")}
                </a>
              </li>
              <li>
                <a
                  href="https://qr.hive-keychain.com/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.resources.qr")}
                </a>
              </li>
              <li>
                <a
                  href="https://stores.hive-keychain.com/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.resources.map")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.socials")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://peakd.com/@keychain"
                  className="flex justify-start items-center text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <FaHive className="mr-2" size={18} /> Hive
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/hivekeychain"
                  className="flex justify-start items-center text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <FaXTwitter className="mr-2" size={18} /> X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/M3xsZXSVQK"
                  className="flex justify-start items-center text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <FaDiscord className="mr-2" size={18} /> Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hive-keychain"
                  className="flex justify-start items-center text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  <FaGithub className="mr-2" size={18} /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
