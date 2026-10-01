import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Milton Olave is a world-renowned sales and business growth expert, transforming over 250,000 sales professionals across 30+ industries. His dynamic presentations are designed to inspire and elevate your sales organization.',
  openGraph: {
    title: 'Speaking',
    description:
      'Milton Olave is a world-renowned sales and business growth expert, transforming over 250,000 sales professionals across 30+ industries. His dynamic presentations are designed to inspire and elevate your sales organization.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking',
    description:
      'Milton Olave is a world-renowned sales and business growth expert, transforming over 250,000 sales professionals across 30+ industries. His dynamic presentations are designed to inspire and elevate your sales organization.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper speaking">
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
                    {'Invite Milton Olave '}
                    <br />
                    to Speak at Your Event
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      Milton Olave is a world-renowned sales and business growth expert, transforming over 250,000 sales
                      professionals across 30+ industries. His dynamic presentations are designed to inspire and elevate
                      your sales organization.
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
                      Check Availability
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
                    <h2 className="heading-2">{'Keynote & Training Topics'}</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      Accelerate your sales and business growth with exclusive guidance from Milton. Learn the
                      strategies that generated $2 billion in sales revenues and remove the mindset blocks holding you
                      back.
                    </p>
                    <div className="rl_layout270_spacing-block-3"></div>
                    <div className="rl_layout207_item-list">
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f38-23cc719f" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              The Psychology of Sales Excellence:
                              <br />
                            </strong>
                            Energize your sales team with Milton’s insights into motivation and cutting-edge techniques.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f41-23cc719f" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              Mastering the 3% Formula:
                              <br />
                            </strong>
                            Unlock the secrets to consistently high sales performance.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f4b-23cc719f" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              Peak Performance for Sales Professionals:
                              <br />
                            </strong>
                            {"Drive sales to new heights by optimizing your team's productivity and mindset."}
                          </p>
                        </div>
                      </div>
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
                        Schedule a Consultation Today
                      </a>
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
        <section className="cta-section">
          <div className="grid-problem">
            <div className="rl_layout1_content cta">
              <h2
                className="heading-2 white-color cta"
                data-anim="slide-in-left"
                data-anim-delay="350"
                data-anim-offset="10"
              >
                {'Meeting planner? '}
                <br />
                Click here to get all the information
              </h2>
              <div className="rl_heading1_spacing-block-2"></div>
              <a
                href="/for-meeting-planers"
                className="rl-button w-button"
                data-anim="slide-in-bottom"
                data-anim-delay="400"
                data-anim-offset="10"
              >
                GET INFORMATION
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
