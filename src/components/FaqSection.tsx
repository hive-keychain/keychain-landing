import { useLanguage } from "../context/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

const FaqSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      question: t("faq.whatIs.question"),
      answer: t("faq.whatIs.answer"),
    },
    {
      question: t("faq.selfCustody.question"),
      answer: t("faq.selfCustody.answer"),
    },
    {
      question: t("faq.networks.question"),
      answer: t("faq.networks.answer"),
    },
    {
      question: t("faq.devices.question"),
      answer: t("faq.devices.answer"),
    },
    {
      question: t("faq.connectivity.question"),
      answer: t("faq.connectivity.answer"),
    },
    {
      question: t("faq.testnets.question"),
      answer: t("faq.testnets.answer"),
    },
    {
      question: t("faq.expansion.question"),
      answer: t("faq.expansion.answer"),
    },
  ];

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">
            {t("faq.title")}
          </h2>
          <p className="mt-4 text-gray-600">{t("faq.intro")}</p>
        </AnimatedSection>

        <dl className="mx-auto max-w-4xl space-y-4">
          {items.map((item, index) => (
            <AnimatedSection
              key={item.question}
              direction="up"
              delay={index * 75}
              className="rounded-lg border border-gray-100 bg-[#F8FBFF] p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-gray-900">
                {item.question}
              </dt>
              <dd className="mt-2 text-gray-600">{item.answer}</dd>
            </AnimatedSection>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FaqSection;
