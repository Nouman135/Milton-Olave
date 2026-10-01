import type { Metadata } from 'next';
import Header from '@/components/Header';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Contact',
  },
  twitter: {
    title: 'Contact',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <section className="form-section">
          <div className="rl-padding-global-8">
            <div className="form-container-big">
              <div className="padding-form-contact">
                <div className="form-contact">
                  <div className="rl_contact1_heading-wrapper">
                    <h2 className="rl-heading-style-h2-5">Contact Us</h2>
                    <div className="rl_contact1_spacing-block-2"></div>
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
                          placeholder="e.g. +1 (305) 671 900"
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
                        <label htmlFor="Additional-Message-2" className="udesly-field-label">
                          Your Message
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
                          {'This contact form stores your information so that you may be contacted at a later time. '}
                          <br />
                          {'I agree with the '}
                          <a href="/terms-and-condition">{'Terms & Conditions'}</a>
                          {' and the '}
                          <a href="/privacy-policy">Privacy</a>
                          {' & '}
                          <a href="/cookies">Cookies Policy</a>
                          {' of Empowerment Leadership Corp and any applicable Terms. '}
                        </p>
                      </div>
                    </LeadForm>
                  </div>
                </div>
                <div className="form-contact-info-text">
                  <div className="rl_contact1_heading-wrapper"></div>
                  <p className="info-text">
                    <span className="info-heading">
                      <strong>
                        Book Milton
                        <br />
                        ‍
                        <br />
                      </strong>
                    </span>
                    <strong>‍</strong>
                    {
                      'To check Milton Olave’s availability for speeches, workshops or consulting to unleash the power of your team, contact '
                    }
                    <a href="mailto:info@miltonolave.com" className="page-link">
                      info@miltonolave.com
                    </a>
                    {' or call +1 (305) 466-6000  or visit our page dedicated to '}
                    <a href="/for-meeting-planers" className="page-link">
                      Meeting planners here
                    </a>
                    <br />
                    <br />
                    <br />‍
                    <strong className="info-heading">
                      Product Inquiries
                      <br />
                      ‍
                      <br />‍
                    </strong>
                    {'For questions about the website or digital product delivery, please contact '}
                    <a href="mailto:info@miltonolave.com" className="page-link">
                      info@miltonolave.com
                    </a>
                    {'  or +1 (305) 466-7000.'}
                    <br />
                    <br />
                    <br />
                    <span className="info-heading">
                      ‍<strong>Media Appearances</strong> <br />
                      ‍
                      <br />
                    </span>
                    {'To check Milton Olave’s availability for media Interviews, contact '}
                    <a href="mailto:info@miltonolave.com" className="page-link">
                      info@miltonolave.com
                    </a>
                    {'  +1 (305) 466-7000.'}
                    <br />
                    <br />
                    <br />‍
                    <span className="info-heading">
                      <strong>
                        Customer Service
                        <br />‍
                      </strong>
                    </span>
                    <strong>
                      <br />
                      Empowerment Leadership Corp
                    </strong>
                    <br />
                    12590 Pines Blvd, #260463
                    <br />
                    Pembroke Pines, FL 33026
                    <br />
                  </p>
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
