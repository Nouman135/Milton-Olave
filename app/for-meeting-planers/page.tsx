import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'For Meeting Planers',
  description:
    'Milton Olave delivers inspiring keynotes and workshops that empower audiences to achieve "More Sales, More Income, More Life." Perfect for your next event.',
  openGraph: {
    title: 'For Meeting Planers',
    description:
      'Milton Olave delivers inspiring keynotes and workshops that empower audiences to achieve "More Sales, More Income, More Life." Perfect for your next event.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Meeting Planers',
    description:
      'Milton Olave delivers inspiring keynotes and workshops that empower audiences to achieve "More Sales, More Income, More Life." Perfect for your next event.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper meeting">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component centre-align">
                <div className="rl_header5_content">
                  <h1 className="rl-heading-style-h1 is-white about-heading">For Bureaus and Meeting Planners</h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="about-hero-wrapper">
                    <p className="medium-text is-white centre-align">
                      {
                        'Milton Olave delivers inspiring keynotes and workshops that empower audiences to achieve "More Sales, More Income, More Life." Perfect for your next event.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="solution-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="heading-wrapper">
                  <h2
                    className="heading-2 centre-align"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    Investment Schedule
                  </h2>
                  <p className="medium-text centre-align">{'All figures in U.S. dollars '}</p>
                </div>
                <div className="w-layout-grid price-grid">
                  <div
                    id="w-node-_753459d7-e8c5-40d7-4958-c62e4f44d681-fe1056b9"
                    className="price-div"
                    data-anim="slide-in-bottom"
                    data-anim-delay="450"
                    data-anim-offset="20"
                  >
                    <div className="price-content">
                      <div className="content-top centre-align">
                        <h3 className="price-heading">Keynote Speech</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text centre-align">North America</p>
                        <h3 className="price-number">$20,000</h3>
                      </div>
                      <div className="line-divider"></div>
                      <p className="medium-text centre-align">International</p>
                      <h3 className="price-number">$30,000</h3>
                    </div>
                  </div>
                  <div
                    id="w-node-_7d8ec54c-5817-79a5-73bf-779bd2775aae-fe1056b9"
                    className="price-div"
                    data-anim="slide-in-bottom"
                    data-anim-delay="450"
                    data-anim-offset="20"
                  >
                    <div className="price-content">
                      <div className="content-top centre-align">
                        <h3 className="price-heading">Half-Day Workshops</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text centre-align">North America</p>
                        <h3 className="price-number">$30,000</h3>
                        <div className="line-divider"></div>
                        <p className="medium-text centre-align">International</p>
                        <h3 className="price-number">$45,000</h3>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_102f3ded-e140-25b8-1b7e-d0862993fdf7-fe1056b9"
                    className="price-div"
                    data-anim="slide-in-bottom"
                    data-anim-delay="450"
                    data-anim-offset="20"
                  >
                    <div className="price-content">
                      <div className="content-top centre-align">
                        <h3 className="price-heading">Full-Day Workshops</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text centre-align">North America</p>
                        <h3 className="price-number">$45,000</h3>
                        <div className="line-divider"></div>
                        <p className="medium-text centre-align">International</p>
                        <h3 className="price-number">$65,000</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rl_heading1_spacing-block-1">
                  <div className="rl_heading1_spacing-block-1"></div>
                </div>
                <p className="medium-text centre-align">
                  {'For details on how Milton can unleash the power of your team, '}
                  <span className="contact-us-text">{'contact us '}</span>
                  {'online '}
                  <a href="/contact" className="email-link">
                    info@miltonolave.com
                  </a>
                  <a href="mailto:Info@miltonolave.com" className="contact-lin">
                    <span className="text-span-2"> </span>
                  </a>
                  {'or call '}
                  <a href="tel:+1(305)466-7000" className="phone-link">
                    +1 (305) 466-7000
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="needs-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large no-top-padding">
                <section className="rl_section_blog44">
                  <div className="rl-container-large-4">
                    <div className="requires_component">
                      <div className="requires_list-wrapper">
                        <div className="requires_item">
                          <div className="requires-image">
                            <img
                              srcSet="/images/image-p-500.webp 500w, /images/image-p-800.webp 800w, /images/image.webp 832w"
                              loading="lazy"
                              sizes="(max-width: 767px) 91vw, (max-width: 991px) 29vw, 30vw"
                              src="/images/image.webp"
                              alt=""
                              className="rl_blog44_image"
                            />
                          </div>
                          <div className="requires_item-content">
                            <div className="rl_blog44_item-content-top">
                              <div className="rl_blog44_meta-wrapper">
                                <div className="rl_blog44_category">
                                  <div className="rl_blog44_category-text">Category</div>
                                </div>
                                <div className="rl_blog44_read-time-text">5 min read</div>
                              </div>
                              <div className="rl_blog44_spacing-block-4"></div>
                              <h3 className="rl-heading-style-h5">Virtual Programs:</h3>
                              <div className="rl_blog44_spacing-block-5"></div>
                              <div className="rl-text-style-regular-2">
                                Milton offers engaging virtual sessions via Zoom or other platforms at 50% of his
                                in-person fee, providing budget-friendly access to his expertise.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="requires_list-wrapper">
                        <div className="requires_item">
                          <div className="requires-image">
                            <img
                              srcSet="/images/pexels-mikhail-nilov-6962993-p-500.webp 500w, /images/pexels-mikhail-nilov-6962993-p-800.webp 800w, /images/pexels-mikhail-nilov-6962993-p-1080.webp 1080w, /images/pexels-mikhail-nilov-6962993-p-1600.webp 1600w, /images/pexels-mikhail-nilov-6962993-p-2000.webp 2000w, /images/pexels-mikhail-nilov-6962993-p-2600.webp 2600w, /images/pexels-mikhail-nilov-6962993.webp 2752w"
                              loading="lazy"
                              sizes="(max-width: 767px) 91vw, (max-width: 991px) 29vw, 30vw"
                              src="/images/pexels-mikhail-nilov-6962993.webp"
                              alt=""
                              className="rl_blog44_image"
                            />
                          </div>
                          <div className="requires_item-content">
                            <div className="rl_blog44_item-content-top">
                              <div className="rl_blog44_meta-wrapper">
                                <div className="rl_blog44_category">
                                  <div className="rl_blog44_category-text">Category</div>
                                </div>
                                <div className="rl_blog44_read-time-text">5 min read</div>
                              </div>
                              <div className="rl_blog44_spacing-block-4"></div>
                              <h3 className="rl-heading-style-h5">Expenses:</h3>
                              <div className="rl_blog44_spacing-block-5"></div>
                              <div className="rl-text-style-regular-2">
                                Milton requires first-class airfare, five-star accommodations, transfers, and meals.
                                Costs can be shared if travel aligns with other events.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="requires_list-wrapper">
                        <div className="requires_item">
                          <div className="requires-image">
                            <img
                              srcSet="/images/image-2-p-500.webp 500w, /images/image-2-p-800.webp 800w, /images/image-2.webp 832w"
                              loading="lazy"
                              sizes="(max-width: 767px) 91vw, (max-width: 991px) 29vw, 30vw"
                              src="/images/image-2.webp"
                              alt=""
                              className="rl_blog44_image"
                            />
                          </div>
                          <div className="requires_item-content">
                            <div className="rl_blog44_item-content-top">
                              <div className="rl_blog44_meta-wrapper">
                                <div className="rl_blog44_category">
                                  <div className="rl_blog44_category-text">Category</div>
                                </div>
                                <div className="rl_blog44_read-time-text">5 min read</div>
                              </div>
                              <div className="rl_blog44_spacing-block-4"></div>
                              <h3 className="rl-heading-style-h5">Recording:</h3>
                              <div className="rl_blog44_spacing-block-5"></div>
                              <div className="rl-text-style-regular-2">
                                Recordings for internal use are free. Commercial recordings incur an additional fee: 50%
                                for audio and 75% for video. Audience recording is welcome.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="tabs-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="rl_layout1_content short">
                  <h2 className="heading-2 white-color centre-align">For Bureaus and Meeting Planners</h2>
                  <div className="w-layout-grid tabs-grid">
                    <a href="/pre-form" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img
                            src="/images/material-symbols-indeterminate-question-box.svg"
                            loading="lazy"
                            alt=""
                            className="image-3"
                          />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">Pre-Order Questionnaire</p>
                        </div>
                      </div>
                    </a>
                    <a href="/reviews" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img
                            src="/images/material-symbols-reviews-outline.svg"
                            loading="lazy"
                            alt=""
                            className="image-3"
                          />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">Testimonials</p>
                        </div>
                      </div>
                    </a>
                    <a href="/room-and-audio-visual-requirements" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img
                            src="/images/flowbite-microphone-outline.svg"
                            loading="lazy"
                            alt=""
                            className="image-3"
                          />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">{'Room & AV set-up'}</p>
                        </div>
                      </div>
                    </a>
                    <a href="/photo" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img src="/images/ic-outline-photo.svg" loading="lazy" alt="" className="image-3" />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">Photos of Milton</p>
                        </div>
                      </div>
                    </a>
                    <a href="/introduction" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img src="/images/f7-doc-text.svg" loading="lazy" alt="" className="image-3" />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">Milton´s Introduction</p>
                        </div>
                      </div>
                    </a>
                    <a href="/security" className="tab-link w-inline-block">
                      <div className="tab-content">
                        <div className="tab-text-div">
                          <img src="/images/material-symbols-security.svg" loading="lazy" alt="" className="image-3" />
                        </div>
                        <div className="tab-icon-div">
                          <p className="medium-text is-white centre-align">Security</p>
                        </div>
                      </div>
                    </a>
                  </div>
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
