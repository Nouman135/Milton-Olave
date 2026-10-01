import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sales Training',
  description:
    "Transform your sales team with Milton Olave's proven strategies. With 20+ years of experience and $2B+ in client revenue, we’ll help your team reach the top 3% of sales professionals.",
  openGraph: {
    title: 'Sales Training',
    description:
      "Transform your sales team with Milton Olave's proven strategies. With 20+ years of experience and $2B+ in client revenue, we’ll help your team reach the top 3% of sales professionals.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Training',
    description:
      "Transform your sales team with Milton Olave's proven strategies. With 20+ years of experience and $2B+ in client revenue, we’ll help your team reach the top 3% of sales professionals.",
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper secondary-pages">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component">
                <div className="rl_header5_content">
                  <h1 className="rl-heading-style-h1 is-white">Sales Training</h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      {
                        "Transform your sales team with Milton Olave's proven strategies. With 20+ years of experience and $2B+ in client revenue, we’ll help your team reach the top 3% of sales professionals."
                      }
                    </p>
                  </div>
                  <div className="rl_heading1_spacing-block-2"></div>
                  <div className="rl-button-group">
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
                    <div className="rl-text-style-subheading-3">About</div>
                    <div className="rl_layout270_spacing-block-1"></div>
                    <h2 className="heading-2">Why Choose Milton Olave’s Sales Training?</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      In today’s competitive market, only 3% of salespeople consistently earn over $100,000 USD
                      annually. Milton Olave’s 3 Percent Sales Formula® is designed to bridge that gap and elevate your
                      team’s performance with innovative, real-world techniques.
                    </p>
                    <div className="rl_layout270_spacing-block-3"></div>
                    <div className="rl_layout207_item-list">
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc598-bfbafe9a" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              {'Master High-Ticket Sales Psychology: '}
                              <br />
                            </strong>
                            Understand the mindset and strategies needed for big-ticket closures.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc59e-bfbafe9a" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              {'Build Unshakable Confidence: '}
                              <br />‍
                            </strong>
                            Thrive in any sales situation with certainty and poise.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc5a4-bfbafe9a" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              {'Enhance Communication Skills: '}
                              <br />
                            </strong>
                            Learn to read subtle customer cues and tailor your approach for maximum impact.
                          </p>
                        </div>
                      </div>
                    </div>
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
        <section className="process-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="wrapper">
                  <div className="rl_layout1_content centre-align">
                    <h2
                      className="heading-2 white-color centre-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="350"
                      data-anim-offset="10"
                    >
                      Our Proven Process
                    </h2>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <p
                      className="rl-text-style-regular is-grey centre-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="450"
                      data-anim-offset="20"
                    >
                      Achieving lasting results has never been simpler:
                    </p>
                  </div>
                </div>
                <div className="step-wrapper">
                  <div
                    className="box-div secondary"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white centre-align">
                          {'Assess Your '}
                          <br />
                          Team:
                        </h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          We start by evaluating your current sales processes to identify opportunities for growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-div secondary"
                    data-anim="slide-in-bottom"
                    data-anim-delay="700"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white centre-align">Customize the Training:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Our experts adapt the 3 Percent Sales Formula® to your industry, goals, and challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-div secondary"
                    data-anim="slide-in-bottom"
                    data-anim-delay="550"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white centre-align">Implement and Reinforce:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Through ongoing coaching and feedback, we ensure your team achieves sustainable improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="proven-section">
          <div className="rl-padding-global-5">
            <div className="rl-container-large-6">
              <div className="rl-padding-section-large-4">
                <div className="div-left-align">
                  <div className="proven-div">
                    <h2 className="heading-2" data-anim="slide-in-left" data-anim-delay="350" data-anim-offset="10">
                      Transform Your Sales Team with Proven Results
                    </h2>
                    <div className="flex-wrapper">
                      <p
                        className="medium-text left-align"
                        data-anim="slide-in-bottom"
                        data-anim-delay="320"
                        data-anim-offset="10"
                      >
                        Milton Olave’s Sales Training program has empowered over 250,000 salespeople across 30+
                        industries, generating more than $2 billion in revenue. Using his 3 Percent Sales Formula®, the
                        program equips your team with proven techniques, time-optimization strategies, and customized
                        learning paths tailored to close more deals and fill skill gaps. With 5,000+ trainings
                        delivered, Milton ensures your team achieves measurable, lasting success.
                      </p>
                      <div className="rl_heading1_spacing-block-2"></div>
                      <a
                        href="/contact"
                        className="rl-button w-button"
                        data-anim="slide-in-bottom"
                        data-anim-delay="400"
                        data-anim-offset="10"
                      >
                        Transform Sales
                      </a>
                    </div>
                  </div>
                  <div className="rl_layout141_spacing-block-4"></div>
                  <div
                    className="rl_layout141_image-wrapper"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <img
                      src="/images/20190126-100108-1.webp"
                      loading="lazy"
                      sizes="90vw"
                      srcSet="/images/20190126-100108-1-p-500.webp 500w, /images/20190126-100108-1-p-800.webp 800w, /images/20190126-100108-1-p-1080.webp 1080w, /images/20190126-100108-1-p-1600.webp 1600w, /images/20190126-100108-1-p-2000.webp 2000w, /images/20190126-100108-1.webp 2216w"
                      alt=""
                      className="rl_layout141_image"
                    />
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
                <br />‍<span className="text-span">In less time</span>
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
                    src="/images/20181001-201036.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 67vw, (max-width: 767px) 346.7890625px, 400.140625px"
                    srcSet="/images/20181001-201036-p-500.webp 500w, /images/20181001-201036-p-800.webp 800w, /images/20181001-201036-p-1080.webp 1080w, /images/20181001-201036-p-1600.webp 1600w, /images/20181001-201036.webp 1814w"
                    alt=""
                    className="image-cta"
                  />
                </div>
                <div className="cta-image">
                  <img
                    src="/images/20181009-113727.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 67vw, (max-width: 767px) 346.7890625px, 400.140625px"
                    srcSet="/images/20181009-113727-p-500.webp 500w, /images/20181009-113727-p-800.webp 800w, /images/20181009-113727-p-1080.webp 1080w, /images/20181009-113727-p-1600.webp 1600w, /images/20181009-113727.webp 1814w"
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
