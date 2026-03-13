import { useLanguage } from "../context/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

const SocialProofSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      value: t("socialProof.users.value"),
      label: t("socialProof.users.label"),
    },
    {
      value: t("socialProof.dapps.value"),
      label: t("socialProof.dapps.label"),
    },
    {
      value: t("socialProof.years.value"),
      label: t("socialProof.years.label"),
    },
    {
      value: t("socialProof.ios.value"),
      label: t("socialProof.ios.label"),
    },
    {
      value: t("socialProof.firefox.value"),
      label: t("socialProof.firefox.label"),
    },
  ];

  return (
    <section
      id="credibility"
      aria-labelledby="social-proof-title"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            id="social-proof-title"
            className="text-3xl md:text-4xl font-bold"
          >
            {t("socialProof.title")}
          </h2>
          <p className="mt-4 text-gray-600">{t("socialProof.intro")}</p>
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, index) => (
            <AnimatedSection
              key={item.value}
              direction="up"
              delay={index * 100}
              className="flex h-full flex-col rounded-lg border border-gray-100 bg-[#E5EDF5] p-5 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
