import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Master proven strategies to close more deals, boost your income, and join the top 3% of earners. Start achieving extraordinary results today.',
  openGraph: {
    title: 'About',
    description:
      'Master proven strategies to close more deals, boost your income, and join the top 3% of earners. Start achieving extraordinary results today.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description:
      'Master proven strategies to close more deals, boost your income, and join the top 3% of earners. Start achieving extraordinary results today.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper about">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component centre-align">
                <div className="rl_header5_content">
                  <h1 className="rl-heading-style-h1 is-white about-heading">
                    Unlock Your Sales Success with Milton Olave
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="about-hero-wrapper">
                    <p className="medium-text is-white centre-align">
                      Master proven strategies to close more deals, boost your income, and join the top 3% of earners.
                      Start achieving extraordinary results today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section-grey">
          <div className="rl-padding-global-5">
            <div className="rl-container-large-6">
              <div className="rl-padding-section-large-4">
                <div className="rl_layout207_component">
                  <div
                    className="rl_layout207_content"
                    data-anim="slide-in-left"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <h2 className="heading-2">About Milton Olave</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      {
                        'Milton Olave is a globally recognized sales expert and business strategist, renowned for his ability to drive transformative results across industries. '
                      }
                      <br />
                      {
                        ' With over 20 years of experience, he has helped businesses and sales professionals generate over $2 billion in sales revenue. His proven 3 Percent Formula® empowers individuals and organizations to break through sales barriers, develop high-performing teams, and consistently close high-value deals.'
                      }
                      <br />
                      <br />
                      {
                        "Milton's approach combines cutting-edge psychology, consultative sales techniques, and a relentless focus on mindset. His methods have helped over 250,000 salespeople across 30+ industries improve their sales performance and join the top 3% of earners in their field."
                      }
                      <br />
                      <br />
                      {
                        "As a bilingual speaker, Milton's reach extends globally, offering training in both English and Spanish, and his impact spans sectors such as insurance, real estate, financial services, and automotive. He is a sought-after keynote speaker and mentor, known for inspiring action and delivering immediate, lasting results for his clients."
                      }
                      <br />
                      <br />
                      Discover the power of Milton Olave’s expertise and unlock your sales potential today.
                    </p>
                  </div>
                  <div
                    className="rl_layout207_image-wrapper"
                    data-anim="slide-in-right"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <img
                      src="/images/mmilton-photo.webp"
                      loading="lazy"
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                      srcSet="/images/mmilton-photo-p-500.webp 500w, /images/mmilton-photo-p-800.webp 800w, /images/mmilton-photo-p-1080.webp 1080w, /images/mmilton-photo.webp 1232w"
                      alt=""
                      className="image-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="_3-grid">
                  <div className="rl_layout1_content short">
                    <h2 className="heading-2 white-color">3 Percent Sales Formula®: Unlock Your Sales Potential</h2>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <p
                      className="rl-text-style-regular is-grey"
                      data-anim="slide-in-bottom"
                      data-anim-delay="450"
                      data-anim-offset="20"
                    >
                      Boost your sales career with the 3 Percent Sales Formula—a proven system to turn average producers
                      into top earners, with consistent monthly sales and annual commissions over $100,000 USD.
                    </p>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <a
                      href="/contact"
                      className="rl-button w-button"
                      data-anim="slide-in-bottom"
                      data-anim-delay="400"
                      data-anim-offset="10"
                    >
                      Unlock Sales Success
                    </a>
                  </div>
                  <div id="w-node-_1affec2f-ed4f-91ec-d1e1-4f191cf252a4-60cc6b61" className="_3--wrapper">
                    <div className="box-div big" data-anim="slide-in-right" data-anim-delay="450" data-anim-offset="15">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Leads</h4>
                          <p className="rl-text-style-regular is-grey">
                            Effortlessly attract high-quality clients 24/7 with our proven lead-generation system.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div big" data-anim="slide-in-right" data-anim-delay="450" data-anim-offset="15">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Conversions</h4>
                          <p className="rl-text-style-regular is-grey">
                            Convert 70% of prospects into clients with elite sales techniques.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div big" data-anim="slide-in-right" data-anim-delay="450" data-anim-offset="15">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Negotiation</h4>
                          <p className="rl-text-style-regular is-grey">
                            Convert prospects instantly with win-win negotiation techniques.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div big" data-anim="slide-in-right" data-anim-delay="450" data-anim-offset="15">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Mindset</h4>
                          <p className="rl-text-style-regular is-grey">
                            Adopt a top-producer mindset for $100K+ commissions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-4">
                  <img
                    src="/images/6734fba58f29fe24330430b7-arrow3.svg.svg"
                    loading="lazy"
                    alt=""
                    className="arrow"
                    data-anim="slide-in-left"
                    data-anim-delay="400"
                    data-anim-offset="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-grey">
          <div className="rl-padding-global-5">
            <div className="rl-container-large-6">
              <div className="rl-padding-section-large-4">
                <div className="rl_layout207_component">
                  <div
                    className="rl_layout207_image-wrapper"
                    data-anim="slide-in-right"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <img
                      src="/images/about-milton-srction.webp"
                      loading="lazy"
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                      srcSet="/images/about-milton-srction-p-500.webp 500w, /images/about-milton-srction-p-800.webp 800w, /images/about-milton-srction-p-1080.webp 1080w, /images/about-milton-srction-p-1600.webp 1600w, /images/about-milton-srction.webp 1646w"
                      alt=""
                      className="image-2"
                    />
                  </div>
                  <div
                    className="rl_layout207_content"
                    data-anim="slide-in-left"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <h2 className="heading-2">{'Speaking & Mentorship'}</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      As a keynote speaker, Milton Olave captivates audiences with his dynamic presence, sharing
                      insights and strategies that empower listeners to take immediate action. He also offers
                      personalized mentorship and consulting, where he works one-on-one with clients to develop bespoke
                      sales strategies that yield measurable results.
                      <br />
                      <br />
                      {"Milton's mentorship programs focus on:"}
                    </p>
                    <div className="rl_layout270_spacing-block-3"></div>
                    <div className="rl_layout207_item-list">
                      <div id="w-node-_18442e2c-49aa-2424-0978-f1b0c229009b-60cc6b61" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            {'Developing '}
                            <strong>high-performing sales teams.</strong>
                          </p>
                        </div>
                      </div>
                      <div id="w-node-_18442e2c-49aa-2424-0978-f1b0c22900a4-60cc6b61" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            {'Creating '}
                            <strong>accountability systems</strong>
                            {' that drive results.'}
                          </p>
                        </div>
                      </div>
                      <div id="w-node-_18442e2c-49aa-2424-0978-f1b0c22900ae-60cc6b61" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>Personalized consulting</strong>
                            {' to break through barriers and maximize success.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="grid-problem">
            <div className="rl_layout1_content cta">
              <h2
                className="heading-2 white-color cta"
                data-anim="slide-in-left"
                data-anim-delay="350"
                data-anim-offset="10"
              >
                {'Let Milton Take Your Team From Average To Top Producers,  '}
                <span className="text-span">
                  <br />
                  In less time
                </span>
              </h2>
              <div className="rl_heading1_spacing-block-2"></div>
              <p
                className="rl-text-style-regular is-grey"
                data-anim="slide-in-bottom"
                data-anim-delay="450"
                data-anim-offset="20"
              >
                Milton In-person events are recognized as life changing experiences that will bring your sales
                experience to another level
              </p>
              <div className="rl_heading1_spacing-block-2"></div>
              <a
                href="/contact"
                className="rl-button w-button"
                data-anim="slide-in-bottom"
                data-anim-delay="400"
                data-anim-offset="10"
              >
                Unlock Sales Success
              </a>
            </div>
            <div className="rl_layout1_content cta-2">
              <div
                className="w-layout-grid grid"
                data-anim="slide-in-right"
                data-anim-delay="350"
                data-anim-offset="10"
              >
                <div className="cta-image">
                  <img
                    src="/images/group-1.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 137.109375px, (max-width: 767px) 254.640625px, 293.8125px"
                    srcSet="/images/group-1-p-500.png 500w, /images/group-1-p-800.png 800w, /images/group-1-p-1080.png 1080w, /images/group-1.png 1378w"
                    alt=""
                    className="image-cta"
                  />
                </div>
                <div className="cta-image">
                  <img
                    src="/images/1.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 137.109375px, (max-width: 767px) 254.640625px, 293.8125px"
                    srcSet="/images/1-p-500.png 500w, /images/1-p-800.png 800w, /images/1-p-1080.png 1080w, /images/1.png 1378w"
                    alt=""
                    className="image-cta"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
