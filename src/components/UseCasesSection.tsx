import {
  AppWindow,
  ArrowLeftRight,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

const UseCasesSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: AppWindow,
      title: t("useCases.connect.title"),
      description: t("useCases.connect.description"),
    },
    {
      icon: ShieldCheck,
      title: t("useCases.approve.title"),
      description: t("useCases.approve.description"),
    },
    {
      icon: Wallet,
      title: t("useCases.assets.title"),
      description: t("useCases.assets.description"),
    },
    {
      icon: ArrowLeftRight,
      title: t("useCases.ecosystems.title"),
      description: t("useCases.ecosystems.description"),
    },
  ];

  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-title"
      className="py-16 bg-[#F8FBFF]"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="use-cases-title" className="text-3xl md:text-4xl font-bold">
            {t("useCases.title")}
          </h2>
          <p className="mt-4 text-gray-600">{t("useCases.intro")}</p>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedSection
              key={item.title}
              direction="up"
              delay={index * 125}
              className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <item.icon size={36} className="mb-4 text-red-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
