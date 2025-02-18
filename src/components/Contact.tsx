import { Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("contact.title")}
        </h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <a
            href="https://discord.gg/M3xsZXSVQK"
            className="flex flex-col items-center p-6 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
          >
            <MessageSquare size={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t("contact.discord.title")}
            </h3>
            <p className="text-center">{t("contact.discord.description")}</p>
          </a>
          <a
            href="mailto:contact@hive-keychain.com"
            className="flex flex-col items-center p-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Mail size={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t("contact.email.title")}
            </h3>
            <p>{t("contact.email.description")}</p>
          </a>
        </div>
        <p className="text-center mt-8 text-gray-600">{t("contact.cta")}</p>
      </div>
    </section>
  );
};

export default Contact;
