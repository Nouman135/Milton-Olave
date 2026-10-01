import type { Metadata } from 'next';
import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pre-Form',
  openGraph: {
    title: 'Pre-Form',
  },
  twitter: {
    title: 'Pre-Form',
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
                <div className="form-contact">
                  <div className="rl_contact1_heading-wrapper">
                    <h2 className="rl-heading-style-h2-5">PRE-PROGRAM QUESTIONNAIRE FOR BOOKING MILTON OLAVE</h2>
                    <div className="rl_contact1_spacing-block-2"></div>
                    <div className="div-block">
                      <div className="photo-form">
                        <img
                          src="/images/mmilton-photo.webp"
                          loading="lazy"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 89vw, (max-width: 991px) 24vw, 17vw"
                          srcSet="/images/mmilton-photo-p-500.webp 500w, /images/mmilton-photo-p-800.webp 800w, /images/mmilton-photo-p-1080.webp 1080w, /images/mmilton-photo.webp 1232w"
                          alt=""
                          className="image-4"
                        />
                      </div>
                      <p className="rl-text-style-medium-6 left-align">
                        I want to make your event as successful as possible. To do that, Ineed some details about the
                        program, so I can tailor the informationand customize the examples to your people. Please take
                        ten minutesand answer the questions below. I look forward to partnering withyou to create an
                        extraordinary experience with you!- MO
                      </p>
                    </div>
                  </div>
                  <div className="rl_contact1_spacing-block-3"></div>
                  <div className="udesly-column" data-anim="from-up" data-anim-delay="0" data-anim-offset="0">
                    <LeadForm
                      wrapperClassName="w-form"
                      formName="Contact Us"
                      done={
                        <div className="udesly-success-message w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                      }
                      fail={
                        <div className="udesly-error-message w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      }
                    >
                      <div className="udesly-form-flex">
                        <div className="udesly-column">
                          <label htmlFor="Name-2" className="udesly-field-label">
                            Your Name:
                          </label>
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Name-2"
                            placeholder="e.g John"
                            type="text"
                            id="Name-2"
                          />
                        </div>
                        <div className="udesly-column">
                          <label htmlFor="Surname-2" className="udesly-field-label">
                            Your Company:
                          </label>
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Surname-2"
                            placeholder="e.g. Google"
                            type="text"
                            id="Surname-2"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="email-2" className="udesly-field-label">
                          Phone number
                        </label>
                        <input
                          className="udesly-text-fiel-contact w-input"
                          maxLength={256}
                          name="email-2"
                          placeholder="+1 (305) 777 789"
                          type="email"
                          id="email-2"
                          required
                        />
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="email-2-2" className="udesly-field-label">
                          Email address
                        </label>
                        <input
                          className="udesly-text-fiel-contact w-input"
                          maxLength={256}
                          name="email-2"
                          placeholder="e.g. john.dowry@example.com"
                          type="email"
                          id="email-2-2"
                          required
                        />
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2" className="udesly-field-label">
                          What type of meeting are you holding?
                          <br />
                          (Annual convention, leadership retreat, awards ceremony, etc.)
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-2" className="udesly-field-label">
                          What is the theme of the event, if any?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-2"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-3" className="udesly-field-label">
                          Have there been any major events impacting your company or industry in the last year that
                          Milton should be aware of?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-3"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-4" className="udesly-field-label">
                          What segment (if any) is directly before Milton’s session?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-4"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-5" className="udesly-field-label">
                          What segment (if any) is directly after Milton’s session?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-5"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-6" className="udesly-field-label">
                          What is the approximate size of the audience?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-6"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-7" className="udesly-field-label">
                          How will the audience be dressed?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-7"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Company-2-8" className="udesly-field-label">
                          {'If your event is being translated…  '}
                          <br />
                          {'What language(s) is it being translated to? '}
                          <br />
                          Will this be simultaneous translation (with headsets) or consecutive?
                        </label>
                        <div className="udesly-relative-block">
                          <input
                            className="udesly-text-fiel-contact w-input"
                            maxLength={256}
                            name="Company-2"
                            placeholder=""
                            type="text"
                            id="Company-2-8"
                          />
                        </div>
                      </div>
                      <div className="udesly-input">
                        <label htmlFor="Additional-Message-2" className="udesly-field-label">
                          Please provide contact information for three people who will be attending, that would agree to
                          be contacted by Milton. (To discover more information about your organization and the issues
                          they are facing.)
                        </label>
                        <div className="udesly-relative-block">
                          <textarea
                            id="Additional-Message-2"
                            name="Additional-Message-2"
                            maxLength={5000}
                            placeholder="Example Text"
                            className="udesly-textarea w-input"
                          />
                          <div className="udesly-text-area">0/300</div>
                        </div>
                      </div>
                      <div className="udesly-form-flex">
                        <input
                          type="submit"
                          className="udesly-submit-button udesly-mb-24 w-button"
                          value="Submit the message"
                        />
                        <p className="udesly-paragraph-xsmall">
                          {
                            'By clicking "Submit," I consent to Milton Olave contacting me via email or phone to share exclusive opportunities and updates. I understand that the information provided is subject to Milton Olave\'s Privacy Policy.'
                          }
                        </p>
                      </div>
                    </LeadForm>
                  </div>
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
