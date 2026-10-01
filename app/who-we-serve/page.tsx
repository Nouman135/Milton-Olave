import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Who we serve',
  description:
    'Milton Olave’s 3 Percent Formula® delivers tailored strategies for businesses and professionals, driving sales excellence at every growth stage.',
  openGraph: {
    title: 'Who we serve',
    description:
      'Milton Olave’s 3 Percent Formula® delivers tailored strategies for businesses and professionals, driving sales excellence at every growth stage.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who we serve',
    description:
      'Milton Olave’s 3 Percent Formula® delivers tailored strategies for businesses and professionals, driving sales excellence at every growth stage.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper who-serve">
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
                    Sales Transformation
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper full">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      Milton Olave’s 3 Percent Formula® delivers tailored strategies for businesses and professionals,
                      driving sales excellence at every growth stage.
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
        <section className="who-benefit-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="rl_layout1_component top-align">
                  <div className="rl_layout1_content">
                    <h2 className="heading-2" data-anim="slide-in-left" data-anim-delay="350" data-anim-offset="10">
                      {'Who Benefits from '}
                      <br />
                      Our Training
                    </h2>
                  </div>
                  <div className="rl_layout1_content numbers">
                    <div
                      className="benefit-wrapper"
                      data-anim="slide-in-bottom"
                      data-anim-delay="500"
                      data-anim-offset="20"
                    >
                      <div className="number-div">
                        <p className="number">01</p>
                      </div>
                      <div className="text-content">
                        <h3 className="heading-3">Enterprise Organizations:</h3>
                        <p className="medium-text">
                          Comprehensive sales transformation for large-scale operations seeking to optimize team
                          performance and processes.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-wrapper"
                      data-anim="slide-in-bottom"
                      data-anim-delay="650"
                      data-anim-offset="10"
                    >
                      <div className="number-div">
                        <p className="number">02</p>
                      </div>
                      <div className="text-content">
                        <h3 className="heading-3">Scaling Companies:</h3>
                        <p className="medium-text">
                          Customized strategies to overcome growing pains and accelerate revenue growth.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-wrapper"
                      data-anim="slide-in-bottom"
                      data-anim-delay="650"
                      data-anim-offset="10"
                    >
                      <div className="number-div">
                        <p className="number">03</p>
                      </div>
                      <div className="text-content">
                        <h3 className="heading-3">Individual Professionals:</h3>
                        <p className="medium-text">
                          Empower yourself with advanced techniques to master high-ticket sales and elevate your career.
                        </p>
                      </div>
                    </div>
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
                      Industry Expertise
                    </h2>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <p
                      className="rl-text-style-regular is-grey centre-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="450"
                      data-anim-offset="20"
                    >
                      Milton’s adaptable system serves diverse industries with tailored solutions:
                    </p>
                  </div>
                </div>
                <div className="_6-block-wrapper">
                  <div
                    className="box-div secondary"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white centre-align">Insurance:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Build trust, simplify policies, and increase retention.
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
                        <h4 className="heading-4 is-white centre-align">Real Estate:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Close high-value deals and foster referral-based businesses.
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
                        <h4 className="heading-4 is-white centre-align">Automotive:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Demonstrate value in competitive, high-pressure environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_6-block-wrapper no-margin">
                  <div
                    className="box-div secondary"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white centre-align">Developer Sales:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Maximize sales potential and accelerate growth in emerging markets.
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
                        <h4 className="heading-4 is-white centre-align">Direct Sales/MLM:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Simplify complex offerings and overcome objections.
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
                        <h4 className="heading-4 is-white centre-align">Financial Services:</h4>
                        <p className="rl-text-style-regular is-grey centre-align">
                          Build lasting relationships and grow assets under management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <h2 className="heading-2">Why Choose Milton Olave?</h2>
                    <div className="rl_layout270_spacing-block-2"></div>
                    <p className="rl-text-style-medium-4">
                      {
                        'With over 20 years of experience and 250,000+ sales professionals trained, Milton is a global leader in sales transformation. His dynamic, bilingual approach bridges cultural and industry-specific challenges, delivering cutting-edge strategies for '
                      }
                      <strong>B2B, B2C, investigative, and consultative sales.</strong>
                    </p>
                    <div className="rl_layout270_spacing-block-3"></div>
                    <div className="rl_layout207_item-list">
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f38-95096f11" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              Proven Results:
                              <br />
                            </strong>
                            $2B+ in client revenue growth.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f41-95096f11" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>
                              Comprehensive Support:
                              <br />
                            </strong>
                            Virtual and live coaching, strategic planning, and hiring assessments.
                          </p>
                        </div>
                      </div>
                      <div id="w-node-a238c11f-8425-5a72-eb07-2caa95302f4b-95096f11" className="rl_layout207_item">
                        <div className="rl_layout207_item-icon-wrapper">
                          <img src="/images/mdi-done.svg" loading="lazy" alt="" className="rl_layout207_icon" />
                        </div>
                        <div className="rl_layout207_item-text-wrapper">
                          <p className="rl-text-style-regular-4">
                            <strong>Global Reach:</strong>
                            <br />
                            Tailored training for English and Spanish-speaking markets.
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
        <section className="solution-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="heading-wrapper">
                  <h2 className="heading-2 centre-align">Comprehensive Solutions for Sales Excellence</h2>
                </div>
                <div className="w-layout-grid solution-grid">
                  <div
                    id="w-node-_4ba5cb13-14cf-5a11-ab16-6b5536c6f8a0-95096f11"
                    className="solution-div"
                    data-anim="slide-in-bottom"
                    data-anim-delay="450"
                    data-anim-offset="20"
                  >
                    <div className="solution-content">
                      <div className="content-top">
                        <h3>Workshops and Seminars</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text">
                          We offer interactive learning experiences that equip your team with essential skills and
                          strategies to excel in sales and drive results.
                        </p>
                      </div>
                      <div className="content-botton">
                        <a href="/workshops-and-seminars" className="link">
                          Read More
                        </a>
                        <div className="icon">
                          <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="review-photo">
                      <img
                        src="/images/9163edb427205bb14f3fb8224c0f3277-1.jpg"
                        loading="lazy"
                        sizes="(max-width: 991px) 91vw, 45vw"
                        srcSet="/images/9163edb427205bb14f3fb8224c0f3277-1-p-500.jpg 500w, /images/9163edb427205bb14f3fb8224c0f3277-1-p-800.jpg 800w, /images/9163edb427205bb14f3fb8224c0f3277-1.jpg 1040w"
                        alt=""
                        className="solution-image"
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_4ba5cb13-14cf-5a11-ab16-6b5536c6f8af-95096f11"
                    className="solution-div small-box"
                    data-anim="slide-in-bottom"
                    data-anim-delay="500"
                    data-anim-offset="20"
                  >
                    <div className="review-photo small-image">
                      <img
                        src="/images/image-1.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 91vw, (max-width: 767px) 44vw, 45vw"
                        srcSet="/images/image-1-p-500.png 500w, /images/image-1-p-800.png 800w, /images/image-1.png 844w"
                        alt=""
                        className="solution-image small"
                      />
                    </div>
                    <div className="solution-content small-box">
                      <div className="content-top">
                        <h3>Digital courses</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text">
                          We offer interactive learning experiences that equip your team with essential skills and
                          strategies to excel in sales and drive results.
                        </p>
                      </div>
                      <div className="content-botton">
                        <a href="/products" className="link">
                          Read More
                        </a>
                        <div className="icon">
                          <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_4ba5cb13-14cf-5a11-ab16-6b5536c6f8be-95096f11"
                    className="solution-div small-box"
                    data-anim="slide-in-bottom"
                    data-anim-delay="650"
                    data-anim-offset="20"
                  >
                    <div className="review-photo small-image">
                      <img
                        src="/images/image.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 91vw, (max-width: 767px) 44vw, 45vw"
                        srcSet="/images/image-p-500.png 500w, /images/image-p-800.png 800w, /images/image.png 846w"
                        alt=""
                        className="solution-image small"
                      />
                    </div>
                    <div className="solution-content small-box">
                      <div className="content-top">
                        <h3>{"Milton Olave's books"}</h3>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text">
                          Discover practical strategies and insights acclaimed books on sales and leadership to enhance
                          your skills and drive business success.
                        </p>
                      </div>
                      <div className="content-botton">
                        <a href="/products" className="link">
                          Read More
                        </a>
                        <div className="icon">
                          <img src="/images/chevron-right.svg" loading="lazy" alt="" />
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
                {'Let Milton Take Your Team From Average To Top Producers,  '}
                <span className="text-span">
                  <br />
                  In less time
                </span>
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
