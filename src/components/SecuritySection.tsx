import React from "react";
import {
  AppWindow,
  KeyRound,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

const SecuritySection = () => {
  const { t } = useLanguage();
  const items = [
    {
      icon: KeyRound,
      title: t("security.self_custody.title"),
      description: t("security.self_custody.description"),
    },
    {
      icon: ShieldCheck,
      title: t("security.secure_signing.title"),
      description: t("security.secure_signing.description"),
    },
    {
      icon: AppWindow,
      title: t("security.transparent_permissions.title"),
      description: t("security.transparent_permissions.description"),
    },
    {
      icon: MonitorSmartphone,
      title: t("security.mobile_extension.title"),
      description: t("security.mobile_extension.description"),
    },
  ];

  return (
    <section
      id="why"
      aria-labelledby="security-title"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 id="security-title" className="text-3xl md:text-4xl font-bold">
            {t("security.title")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("security.intro")}
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <AnimatedSection
              key={item.title}
              direction="up"
              delay={index * 150}
              className="flex h-full flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <item.icon size={40} className="mb-4 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
