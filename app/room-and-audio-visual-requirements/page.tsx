import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Room and Audio-Visual Requirements',
  openGraph: {
    title: 'Room and Audio-Visual Requirements',
  },
  twitter: {
    title: 'Room and Audio-Visual Requirements',
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
                    <h2 className="rl-heading-style-h2-5">Room and Audio-Visual Requirements</h2>
                    <div className="rl_contact1_spacing-block-2"></div>
                    <div className="requires">
                      <div className="micro-photo">
                        <img
                          src="/images/e6ow5t-1920x1080.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 84vw, (max-width: 991px) 77vw, 62vw"
                          srcSet="/images/e6ow5t-1920x1080-p-500.jpg 500w, /images/e6ow5t-1920x1080-p-800.jpg 800w, /images/e6ow5t-1920x1080-p-1080.jpg 1080w, /images/e6ow5t-1920x1080-p-1600.jpg 1600w, /images/e6ow5t-1920x1080.jpg 1816w"
                          alt=""
                          className="image-4"
                        />
                      </div>
                      <p className="names">
                        <strong>countryman e6 omnidirectional earset microphone</strong>
                      </p>
                      <p className="rl-text-style-medium-6 left-align">
                        {
                          "Even the greatest speech can be viewed as ineffective when the room set-up is not optimal. To help ensure that Milton's program meets your expectations and fulfills the ultimate benefit of your audience, please review the A/V requests below and let us know if there are any challenges. Milton is flexible and will work with your A/V capabilities and your technicians to maximize the effectiveness of your platform."
                        }
                      </p>
                      <p className="rl-text-style-medium-6 left-align">
                        <strong>Equipment:</strong>
                        <br />
                        - Wireless ear set Countryman microphone
                        <br />
                        This must be an ear set microphone not a large headset with a head clamp. If this is not
                        available, please have a wireless lavaliere (tie clip) microphone.
                        <br />
                        - Mr. Olave will bring a music play list on a flash drive for your technician to play.
                        <br />
                        <br />
                        <strong>
                          Staging:
                          <br />
                        </strong>
                        - For keynote speeches, please provide a large cocktail table with bottle water and fresh
                        flowers.
                        <br />
                        - For workshop, please provide a large cocktail table with bottle water and fresh flowers. A
                        high bar stool with back and hand rest.
                        <br />
                        <br />
                        <strong>Room Environment:</strong>
                        <br />
                        {
                          'A bright stage will help keep audience focus at the front of the room. Milton will utilize the entire stage area and will stay toward the front edge. If the room has any spotlights, please aim them for a general wash of the front of the stage.People are more alert in brightness. '
                        }
                        <br />
                        Dim the lighting on the screens but keep the house lights up full.
                        <br />
                        <br />
                        <strong>Temperature</strong>
                        :
                        <br />
                        A cool room produces an alert audience, a warm room produces a drowsy audience. A cold room
                        produces a distracted audience, and a hot room produces an irritated audience. The actual room
                        temperature should be somewhere between 68-70 degrees Fahrenheit.
                        <br />
                        <br />
                        <strong>
                          Greenroom:
                          <br />‍
                        </strong>
                        Please stock the greenroom with Fiji or Evian water, fresh fruit, and protein energy bars or
                        cheese and crackers.
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
