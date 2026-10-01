import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Workshops and Seminars',
  description:
    'Milton Olave delivers dynamic sessions focused on mastering the 3 Percent Sales Formula and achieving sales success. Tailored for your industry, these workshops empower participants to excel and take action.',
  openGraph: {
    title: 'Workshops and Seminars',
    description:
      'Milton Olave delivers dynamic sessions focused on mastering the 3 Percent Sales Formula and achieving sales success. Tailored for your industry, these workshops empower participants to excel and take action.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshops and Seminars',
    description:
      'Milton Olave delivers dynamic sessions focused on mastering the 3 Percent Sales Formula and achieving sales success. Tailored for your industry, these workshops empower participants to excel and take action.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper workshops">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component">
                <div className="rl_header5_content">
                  <h1 className="rl-heading-style-h1 is-white">Workshops and Seminars</h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      {'Milton Olave delivers dynamic sessions focused on mastering the '}
                      <strong>3 Percent Sales Formula</strong>
                      {
                        ' and achieving sales success. Tailored for your industry, these workshops empower participants to excel and take action.'
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
        <section className="product-section">
          <div className="rl-padding-global-6">
            <div className="rl-container-large-7">
              <div className="rl-padding-section-large-5">
                <div className="rl_testimonial17_component">
                  <div className="large-heading-wrapper">
                    <h2 className="heading-2 centre-align">Workshops and Seminars</h2>
                  </div>
                  <div className="product-component">
                    <div className="products-wrapper">
                      <div className="card-product-wrapper">
                        <div className="card-text-wrapper">
                          <div className="content-top">
                            <h3>3% Formula Sales Trainings</h3>
                            <div className="rl_heading1_spacing-block-1"></div>
                            <p className="medium-text">
                              A powerful sales methodology that turns struggling salespeople into unstoppable six-figure
                              earners through lead generation, conversion, negotiation, and a winning mindset.
                            </p>
                          </div>
                          <div className="content-botton">
                            <a href="/contact" className="link">
                              Contact Us
                            </a>
                            <div className="icon">
                              <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="card-image-wrapper short-option">
                          <img
                            src="/images/673798b2a8e96ec3331b564c-image-here.png"
                            loading="lazy"
                            sizes="(max-width: 991px) 85vw, 34vw"
                            srcSet="/images/673798b2a8e96ec3331b564c-image-here-p-500.png 500w, /images/673798b2a8e96ec3331b564c-image-here.png 741w"
                            alt=""
                            className="product-image cover-option"
                          />
                        </div>
                      </div>
                      <div className="card-product-wrapper">
                        <div className="card-text-wrapper">
                          <div className="content-top">
                            <h3>Leadership and Team Building</h3>
                            <div className="rl_heading1_spacing-block-1"></div>
                            <p className="medium-text">
                              Workshops aimed at empowering team leaders and managers to inspire and drive
                              high-performing sales teams.
                            </p>
                          </div>
                          <div className="content-botton">
                            <a href="/contact" className="link">
                              Contact Us
                            </a>
                            <div className="icon">
                              <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="card-image-wrapper short-option">
                          <img
                            src="/images/20181009-113523.webp"
                            loading="lazy"
                            sizes="(max-width: 991px) 85vw, 34vw"
                            srcSet="/images/20181009-113523-p-500.webp 500w, /images/20181009-113523-p-800.webp 800w, /images/20181009-113523-p-1080.webp 1080w, /images/20181009-113523-p-1600.webp 1600w, /images/20181009-113523.webp 1895w"
                            alt=""
                            className="product-image cover-option"
                          />
                        </div>
                      </div>
                      <div className="card-product-wrapper">
                        <div className="card-text-wrapper">
                          <div className="content-top">
                            <h3>Personal Development</h3>
                            <div className="rl_heading1_spacing-block-1"></div>
                            <p className="medium-text">
                              <strong>Mindset for Success Seminars:</strong>
                              {
                                ' Teaching attendees how to develop a winning attitude and overcome challenges to reach personal and professional goals.'
                              }
                            </p>
                          </div>
                          <div className="content-botton">
                            <a href="/contact" className="link">
                              Contact Us
                            </a>
                            <div className="icon">
                              <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="card-image-wrapper short-option">
                          <img
                            src="/images/about-milton-srction.webp"
                            loading="lazy"
                            sizes="(max-width: 991px) 85vw, 34vw"
                            srcSet="/images/about-milton-srction-p-500.webp 500w, /images/about-milton-srction-p-800.webp 800w, /images/about-milton-srction-p-1080.webp 1080w, /images/about-milton-srction-p-1600.webp 1600w, /images/about-milton-srction.webp 1646w"
                            alt=""
                            className="product-image cover-option"
                          />
                        </div>
                      </div>
                      <div className="card-product-wrapper">
                        <div className="card-text-wrapper">
                          <div className="content-top">
                            <h3>Strategic and Business Growth</h3>
                            <div className="rl_heading1_spacing-block-1"></div>
                            <p className="medium-text">
                              Programs on building meaningful connections to expand business opportunities and client
                              bases.
                            </p>
                          </div>
                          <div className="content-botton">
                            <a href="/contact" className="link">
                              Contact Us
                            </a>
                            <div className="icon">
                              <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="card-image-wrapper short-option">
                          <img
                            src="/images/20181016-111848.webp"
                            loading="lazy"
                            sizes="(max-width: 991px) 85vw, 34vw"
                            srcSet="/images/20181016-111848-p-500.webp 500w, /images/20181016-111848-p-800.webp 800w, /images/20181016-111848-p-1080.webp 1080w, /images/20181016-111848-p-1600.webp 1600w, /images/20181016-111848.webp 1814w"
                            alt=""
                            className="product-image cover-option"
                          />
                        </div>
                      </div>
                      <div className="card-product-wrapper">
                        <div className="card-text-wrapper">
                          <div className="content-top">
                            <h3>Motivational Keynotes</h3>
                            <div className="rl_heading1_spacing-block-1"></div>
                            <p className="medium-text">
                              {
                                'Events that inspire action and engagement, addressing themes like achieving "More Sales, More Income, More Life."'
                              }
                            </p>
                          </div>
                          <div className="content-botton">
                            <a href="/contact" className="link">
                              Contact Us
                            </a>
                            <div className="icon">
                              <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="card-image-wrapper short-option">
                          <img
                            src="/images/1.png"
                            loading="lazy"
                            sizes="(max-width: 991px) 85vw, 34vw"
                            srcSet="/images/1-p-500.png 500w, /images/1-p-800.png 800w, /images/1-p-1080.png 1080w, /images/1.png 1378w"
                            alt=""
                            className="product-image cover-option"
                          />
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
                    src="/images/20181016-111848.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 72vw, (max-width: 767px) 346.7890625px, 400.140625px"
                    srcSet="/images/20181016-111848-p-500.webp 500w, /images/20181016-111848-p-800.webp 800w, /images/20181016-111848-p-1080.webp 1080w, /images/20181016-111848-p-1600.webp 1600w, /images/20181016-111848.webp 1814w"
                    alt=""
                    className="image-cta"
                  />
                </div>
                <div className="cta-image">
                  <img
                    src="/images/20181009-113257.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 72vw, (max-width: 767px) 346.7890625px, 400.140625px"
                    srcSet="/images/20181009-113257-p-500.webp 500w, /images/20181009-113257-p-800.webp 800w, /images/20181009-113257-p-1080.webp 1080w, /images/20181009-113257-p-1600.webp 1600w, /images/20181009-113257-p-2000.webp 2000w, /images/20181009-113257-p-2600.webp 2600w, /images/20181009-113257-p-3200.webp 3200w, /images/20181009-113257.webp 4032w"
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
