import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Virtual Training',
  description:
    "Empower your sales team globally with Milton Olave's Virtual Training. Tailored for the modern business world, our online sessions deliver proven sales expertise, driving exceptional results in 30+ industries.",
  openGraph: {
    title: 'Virtual Training',
    description:
      "Empower your sales team globally with Milton Olave's Virtual Training. Tailored for the modern business world, our online sessions deliver proven sales expertise, driving exceptional results in 30+ industries.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Training',
    description:
      "Empower your sales team globally with Milton Olave's Virtual Training. Tailored for the modern business world, our online sessions deliver proven sales expertise, driving exceptional results in 30+ industries.",
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper virtual-page">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component">
                <div className="rl_header5_content">
                  <h1
                    className="rl-heading-style-h1 is-white centre-align"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    Virtual Training
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      {
                        "Empower your sales team globally with Milton Olave's Virtual Training. Tailored for the modern business world, our online sessions deliver proven sales expertise, driving exceptional results in 30+ industries."
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
                    <h2 className="heading-2">Why Choose Milton Olave’s Virtual Training?</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      Traditional training methods often fall short when teams are dispersed. Milton’s Virtual Training
                      programs overcome these challenges with:
                    </p>
                    <div className="rl_layout270_spacing-block-3"></div>
                    <div className="rl_layout207_item-list">
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc598-b04ec4b8" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>{'Interactive Sessions: '}</strong> <br />
                            Engaging online learning experiences led by Milton and his expert team.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc59e-b04ec4b8" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              {'Tailored Content: '}
                              <br />‍
                            </strong>
                            Training customized to your industry, team goals, and challenges.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-eaa464a2-0d57-b57f-c1ae-060c254bc5a4-b04ec4b8" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              {'Global Flexibility: '}
                              <br />
                            </strong>
                            Schedules designed to accommodate teams across time zones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-virtual" data-anim="slide-in-right" data-anim-delay="350" data-anim-offset="10">
                    <img
                      src="/images/4c65a2b0-493e-4c7c-9711-76f1dbbb0b41.webp"
                      loading="lazy"
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 41vw"
                      srcSet="/images/4c65a2b0-493e-4c7c-9711-76f1dbbb0b41-p-500.webp 500w, /images/4c65a2b0-493e-4c7c-9711-76f1dbbb0b41-p-800.webp 800w, /images/4c65a2b0-493e-4c7c-9711-76f1dbbb0b41-p-1080.webp 1080w, /images/4c65a2b0-493e-4c7c-9711-76f1dbbb0b41.webp 1573w"
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
                      Our Simple, Proven Process
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
                          {"We evaluate your team's current skills and unique training needs."}
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
                          A personalized program is designed to align with your business objectives.
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
                          Live virtual sessions and on-demand resources ensure continuous learning and measurable
                          improvement.
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
                      Real Results, Anywhere
                    </h2>
                    <div className="flex-wrapper">
                      <p
                        className="medium-text left-align"
                        data-anim="slide-in-bottom"
                        data-anim-delay="320"
                        data-anim-offset="10"
                      >
                        Milton’s Virtual Training has empowered over 250,000 salespeople, generated $2 billion in
                        revenue, and driven success in 30+ industries. Through interactive and cutting-edge techniques,
                        we ensure your team excels even in remote selling environments.
                      </p>
                      <div className="rl_heading1_spacing-block-2"></div>
                      <a
                        href="/contact"
                        className="rl-button w-button"
                        data-anim="slide-in-bottom"
                        data-anim-delay="400"
                        data-anim-offset="10"
                      >
                        Schedule a Virtual Demo Today
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
                      src="/images/image-1.webp"
                      loading="lazy"
                      sizes="90vw"
                      srcSet="/images/image-1-p-500.webp 500w, /images/image-1-p-800.webp 800w, /images/image-1-p-1080.webp 1080w, /images/image-1-p-1600.webp 1600w, /images/image-1-p-2000.webp 2000w, /images/image-1-p-2600.webp 2600w, /images/image-1.webp 2624w"
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
                    src="/images/image.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 67vw, (max-width: 767px) 346.6640625px, 400px"
                    srcSet="/images/image-p-500.webp 500w, /images/image-p-800.webp 800w, /images/image.webp 832w"
                    alt=""
                    className="image-cta"
                  />
                </div>
                <div className="cta-image">
                  <img
                    src="/images/20190216-120825-1.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 67vw, (max-width: 767px) 346.6640625px, 400px"
                    srcSet="/images/20190216-120825-1-p-500.webp 500w, /images/20190216-120825-1-p-800.webp 800w, /images/20190216-120825-1-p-1080.webp 1080w, /images/20190216-120825-1-p-1600.webp 1600w, /images/20190216-120825-1-p-2000.webp 2000w, /images/20190216-120825-1.webp 2016w"
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
