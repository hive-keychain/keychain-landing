import { useSnapCarousel } from '../hooks/useSnapCarousel';
import CarouselDots from './CarouselDots';

const TESTIMONIALS = [
  {
    name: 'Asgarth',
    role: 'Co-founder of Peakd and Peakmonsters',
    image: 'https://images.hive.blog/u/asgarth/avatar',
    quote: 'Hive Keychain is the best Hive wallet and the easiest way to interact with the Hive ecosystem both on desktop and mobile.',
  },
  {
    name: 'Starkerz',
    role: 'Founder @ 3Speak',
    image: 'https://images.hive.blog/u/starkerz/avatar',
    quote: 'From secure blockchain signatures, payments, using their in wallet browser to get cash back on purchases & quickly signing up & adding account data to the blockchain for posting content with my BTC account, Hive Keychain is one of our recommended go to apps in the Hive ecosystem!',
  },
  {
    name: 'Howo',
    role: 'Core dev @ Hive blockchain',
    image: 'https://images.hive.blog/u/howo/avatar',
    quote: "I use Keychain daily to interact with the chain! It's the best out there.",
  },
  /*
  {
    name: 'Vaultec',
    role: 'Founder of VSC Network',
    image: 'https://images.hive.blog/u/vaultec/avatar',
    quote: 'Keychain is the ultimate wallet interface for the Hive blockchain. We look forward  to working on bringing the world of cross-chain to Hive',
  },
  */
  {
    name: 'Dan',
    role: 'Co-founder @ 3Speak',
    image: 'https://images.hive.blog/u/theycallmedan/avatar',
    quote: 'I use Hive keychain everyday. I started using their mobile browser as well more and more, it makes hiving better. It does so much, and it just works. First step to hiving is downloading Hive keychain.',
  },
  {
    name: 'Yabapmatt',
    role: 'CEO of Splinterlands',
    image: 'https://images.hive.blog/u/yabapmatt/avatar',
    quote: "Hive Keychain is probably the most important tool in the entire Hive ecosystem. Hive is made to power web3 applications and Keychain is what allows users to easily and securely interact with those apps on both desktop and mobile. Without it, the user experience for Splinterlands and all Hive applications would be considerably worse and I don't think we would have had nearly the level of success that we have had.",
  },
  {
    name: 'Arcange',
    role: 'Creator of HiveBuzz, HiveSQL, HiveAuth, Engage and more',
    image: 'https://images.hive.blog/u/arcange/avatar',
    quote: "I've been using Hive Keychain for years now, and I can confidently say it’s one of the most secure and user-friendly tools in the blockchain space. The integration of the HiveAuth protocol was game-changer enabling the most secure and seamless way to authenticate and sign transactions on mobiles apps.  If you’re serious about blockchain and want a tool that’s both cutting-edge and rock-solid, Hive Keychain is the gold standard.",
  },
] as const;

export default function Reviews() {
  const carousel = useSnapCarousel(TESTIMONIALS.length);
  return (
      <section className="block alt" id="voices">
        <div className="wrap">
          <div className="sec-head center reveal">
            <h2>Trusted by the Hive community.</h2>
            <p>Voices from builders and leaders across the Hive ecosystem.</p>
          </div>
          <div className="quotes reveal-group" ref={carousel.trackRef}>
            {TESTIMONIALS.map((testimonial) => (
              <article className="quote" key={testimonial.name}>
                <span className="eco eco-hive">Hive community</span>
                <p>“{testimonial.quote}”</p>
                <div className="who">
                  <img className="avatar-dot" src={testimonial.image} alt="" loading="lazy" />
                  <span><b>{testimonial.name}</b><span>{testimonial.role}</span></span>
                </div>
              </article>
            ))}
          </div>
          <CarouselDots count={TESTIMONIALS.length} active={carousel.active} onDotClick={carousel.dotClick} />
        </div>
      </section>
  );
}
