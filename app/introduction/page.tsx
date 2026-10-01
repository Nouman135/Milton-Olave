import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Instruction',
  openGraph: {
    title: 'Instruction',
  },
  twitter: {
    title: 'Instruction',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <section className="form-section">
          <div className="rl-padding-global-8">
            <div className="form-container">
              <div className="padding-form">
                <div className="form-audio">
                  <div className="rl_contact1_heading-wrapper">
                    <h2 className="rl-heading-style-h2-5">Milton Olave Introduction</h2>
                    <div className="rl_contact1_spacing-block-2"></div>
                    <div className="requires">
                      <p className="rl-text-style-medium-6 left-align">
                        The program you’re about to experience is unlike anything you’ve ever seen before. Our
                        presenter’s journey began as a teenage immigrant with humble beginnings, working tirelessly to
                        overcome life’s challenges and build an extraordinary career. Through grit and determination, he
                        rose to become a top sales expert and strategist, inspiring thousands to transform their lives.
                        <br />
                        <br />
                        Today, Milton Olave is a renowned entrepreneur, motivational speaker, and sales trainer who has
                        empowered over 200,000 professionals across the globe. With 20 years of experience and a proven
                        track record of results, Milton is also the creator of the 3 Percent Sales Formula, a powerful
                        framework designed to help salespeople achieve record-breaking success.
                        <br />
                        <br />
                        For live events:
                        <br />
                        {
                          'Today, Milton will be sharing his strategies for achieving "More Sales, More Income, More Life" and how to turn your potential into prosperity. Please join me in giving a warm welcome to MILTONNNN Olave!'
                        }
                        <br />
                        <br />
                        For online events:
                        <br />
                        {
                          'Today, Milton will be sharing his strategies for achieving "More Sales, More Income, More Life" and how to turn your potential into prosperity. Milton, the floor is yours…'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="rl_contact1_spacing-block-3"></div>
                </div>
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
