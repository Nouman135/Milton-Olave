import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Security',
  openGraph: {
    title: 'Security',
  },
  twitter: {
    title: 'Security',
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
                    <h2 className="rl-heading-style-h2-5">{'SECURITY MEASURES FOR MILTON OLAVE'}</h2>
                    <div className="rl_contact1_spacing-block-2"></div>
                    <div className="requires">
                      <p className="rl-text-style-medium-6 left-align">
                        For security purposes, Mr. Olave’s hotel reservations should not be made under his name. A
                        pseudonym will be provided for use. For events with over 1,000 attendees, security personnel
                        must be stationed in front of the stage.
                        <br />
                        <br />A private green room with bathroom facilities should be available behind the stage, with
                        no access for the general public. Additionally, there must be a secure backstage entrance with
                        transportation and personnel to ensure his safe arrival and departure. Please refrain from
                        publicly disclosing Mr. Olave’s travel details, including arrival and departure times or airline
                        information.
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
