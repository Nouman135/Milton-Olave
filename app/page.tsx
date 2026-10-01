import type { Metadata } from 'next';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import { postsBySlug } from '@/content/posts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Boost Your Sales with World-Class Expertise',
  description:
    'Help your salespeople get the proven strategies to go from average to top sales achievers, in less time!',
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper main-home">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component">
                <div className="medium-heading-wrapper">
                  <h1 className="rl-heading-style-h1 is-white">Boost Your Sales with World-Class Expertise</h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p className="medium-text is-white">
                      Help your salespeople get the proven strategies to go from average to top sales achievers, in less
                      time!
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
        <header className="hero-wrapper-mobile">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="header5_component moobile-version">
                <div className="rl_header5_content">
                  <h1
                    className="rl-heading-style-h1 is-white centre-align"
                    data-anim="slide-in-bottom"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    Boost Your Sales with World-Class Expertise
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="div-hero-mob">
                    <p className="medium-text is-white centre-align">
                      Help your salespeople get the proven strategies to go from average to top sales achievers, in less
                      time!
                    </p>
                  </div>
                  <div className="rl_heading1_spacing-block-2"></div>
                  <div className="rl-button-group centre-align">
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
        <div className="logo-section">
          <main className="logo-wrapper">
            <div className="logo-div">
              <div className="slider-wrapper">
                <div className="items-holder">
                  <div className="items">
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37be25a73fe3d631061-artboard-208-p-500.png-p-500.png 500w, /images/66f0d37be25a73fe3d631061-artboard-208-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37be25a73fe3d631061-artboard-208-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b0b8189b7dcb037ff-artboard-206.png-p-500.png 500w, /images/66f0d37b0b8189b7dcb037ff-artboard-206.png.png 608w"
                      alt=""
                      src="/images/66f0d37b0b8189b7dcb037ff-artboard-206.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png-p-500.png 500w, /images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png-p-500.png 500w, /images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png-p-500.png 500w, /images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png-p-500.png 500w, /images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png-p-500.png 500w, /images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png-p-500.png 500w, /images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                  </div>
                  <div className="items">
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37be25a73fe3d631061-artboard-208-p-500.png-p-500.png 500w, /images/66f0d37be25a73fe3d631061-artboard-208-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37be25a73fe3d631061-artboard-208-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b0b8189b7dcb037ff-artboard-206.png-aafffe-p-500.png 500w, /images/66f0d37b0b8189b7dcb037ff-artboard-206.png-aafffe.png 608w"
                      alt=""
                      src="/images/66f0d37b0b8189b7dcb037ff-artboard-206.png-aafffe.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png-p-500.png 500w, /images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37bce113ebc5e289637-artboard-2010-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png-p-500.png 500w, /images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f9297b2bd01bc01-artboard-201-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png-p-500.png 500w, /images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f8b433bf8b8206a-artboard-202-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png-p-500.png 500w, /images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37be25a73fe3d6310a3-artboard-2013-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png-p-500.png 500w, /images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b0b8189b7dcb03810-artboard-203-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                    <img
                      sizes="(max-width: 608px) 100vw, 608px"
                      srcSet="/images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png-p-500.png 500w, /images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png.png 608w"
                      alt=""
                      src="/images/66f0d37b2f9297b2bd01bc01-artbxoard-201-p-500.png.png"
                      loading="eager"
                      className="item"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-embed"></div>
          </main>
        </div>
        <section className="who-benefit-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="rl_layout1_component">
                  <div className="rl_layout1_content">
                    <h2 className="heading-2">Who Benefits from Our Expertise</h2>
                    <div className="quote-div" data-anim="slide-in-left" data-anim-delay="400" data-anim-offset="10">
                      <p className="medium-text quote-text">
                        {
                          '"Our approach empowers teams to not only hit their targets but to exceed them consistently, fostering a culture of sustained success and growth."'
                        }
                      </p>
                      <div className="author-quote">
                        <div className="div-author">
                          <img
                            src="/images/6539475be7b95e106ebe3a89-author-20image-p-500.webp.png"
                            loading="lazy"
                            alt=""
                            className="author-image"
                          />
                        </div>
                        <div className="name-quote">
                          <p className="rl-text-style-subheading">Milton Olave</p>
                          <p className="medium-text">World-Class sales trainer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rl_layout1_content numbers">
                    <div
                      className="benefit-wrapper"
                      data-anim="slide-in-bottom"
                      data-anim-delay="650"
                      data-anim-offset="10"
                    >
                      <div className="number-div">
                        <p className="number">01</p>
                      </div>
                      <div className="text-content">
                        <h3 className="heading-3">Sales Organizations</h3>
                        <p className="medium-text">
                          Optimize team performance with tailored strategies that drive revenue growth and long-term
                          success.
                        </p>
                      </div>
                    </div>
                    <div
                      className="benefit-wrapper"
                      data-anim="slide-in-bottom"
                      data-anim-delay="500"
                      data-anim-offset="20"
                    >
                      <div className="number-div">
                        <p className="number">02</p>
                      </div>
                      <div className="text-content">
                        <h3 className="heading-3">Individual Salespeople</h3>
                        <p className="medium-text">
                          Gain strategies to exceed sales targets and boost professional growth.
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
                        <h3 className="heading-3">Speaking Bureaus</h3>
                        <p className="medium-text">
                          Empower your clients with a speaker who inspires audiences and delivers proven Sales Success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="quote-div mobile"
                    data-anim="slide-in-left"
                    data-anim-delay="400"
                    data-anim-offset="10"
                  >
                    <p className="medium-text quote-text">
                      {
                        '"Our approach empowers teams to not only hit their targets but to exceed them consistently, fostering a culture of sustained success and growth."'
                      }
                    </p>
                    <div className="author-quote">
                      <div className="div-author">
                        <img
                          src="/images/6539475be7b95e106ebe3a89-author-20image-p-500.webp.png"
                          loading="lazy"
                          alt=""
                          className="author-image"
                        />
                      </div>
                      <div className="name-quote">
                        <p className="rl-text-style-subheading">Milton Olave</p>
                        <p className="medium-text">World-Class sales trainer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="grid-problem">
                  <div className="rl_layout1_content short">
                    <h2 className="heading-2 white-color">We understand your challenges</h2>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <p
                      className="rl-text-style-regular is-grey"
                      data-anim="slide-in-bottom"
                      data-anim-delay="450"
                      data-anim-offset="20"
                    >
                      Sales can be tough, but we’re here with proven solutions to streamline your process and boost
                      results, helping you close more deals.
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
                  <div id="w-node-_9ba466c3-fdee-8cef-b414-46d6981f7a81-265608b3" className="box-wrapper">
                    <div className="box-div big" data-anim="slide-in-right" data-anim-delay="450" data-anim-offset="15">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">01/ Poor Lead Quality</h4>
                          <p className="rl-text-style-regular is-grey">
                            Low-quality leads waste time and resources, impacting conversions and ROI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-big-wrapper">
                  <div className="box-div big" data-anim="slide-in-bottom" data-anim-delay="550" data-anim-offset="20">
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white">02/ Low Sales Performance</h4>
                        <p className="rl-text-style-regular is-grey">
                          Without clear direction, teams struggle to reach their potential and meet targets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-div big" data-anim="slide-in-bottom" data-anim-delay="700" data-anim-offset="20">
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white">03/ Lack of Team Motivation</h4>
                        <p className="rl-text-style-regular is-grey">
                          An unmotivated team limits growth; we focus on building a culture of peak performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-big-wrapper">
                  <div
                    className="box-div big padding"
                    data-anim="slide-in-left"
                    data-anim-delay="650"
                    data-anim-offset="20"
                  >
                    <div className="problem-content">
                      <div className="text-content">
                        <h4 className="heading-4 is-white">04/ Inefficient Sales Processes</h4>
                        <p className="rl-text-style-regular is-grey">
                          Inefficient processes slow down sales cycles and reduce conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-1">
                  <img
                    src="/images/arrow-milton.svg"
                    loading="lazy"
                    alt=""
                    className="arrow"
                    data-anim="slide-in-left"
                    data-anim-delay="400"
                    data-anim-offset="20"
                  />
                </div>
                <div className="arrow-2">
                  <img
                    src="/images/arrow-2-milton.svg"
                    loading="lazy"
                    alt=""
                    className="arrow"
                    data-anim="slide-in-top"
                    data-anim-delay="500"
                    data-anim-offset="20"
                  />
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
                    id="w-node-_09e6110e-8642-80de-acd0-daea930f9a3e-265608b3"
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
                          <strong>Give Your Team the Unbeatable Advantage</strong>
                          {'. '}
                          <br />
                          With over 5,000 sales training sessions delivered, we excel at turning average salespeople
                          into top producers in less time.
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
                        sizes="100vw"
                        srcSet="/images/9163edb427205bb14f3fb8224c0f3277-1-p-500.jpg 500w, /images/9163edb427205bb14f3fb8224c0f3277-1-p-800.jpg 800w, /images/9163edb427205bb14f3fb8224c0f3277-1.jpg 1040w"
                        alt=""
                        className="solution-image"
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-c7a52656-1e39-61b1-4ebe-ee63b81e5482-265608b3"
                    className="solution-div home-box"
                    data-anim="slide-in-bottom"
                    data-anim-delay="500"
                    data-anim-offset="20"
                  >
                    <div id="w-node-c7a52656-1e39-61b1-4ebe-ee63b81e548f-265608b3" className="review-photo small-image">
                      <img
                        src="/images/image-1.png"
                        loading="lazy"
                        sizes="100vw"
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
                          <strong>Turn Drive Time into Empowerment Time!</strong> <br />
                          Master sales skills and strategies with our self-paced courses in Spanish and English. Achieve
                          results, surpass the competition, and elevate your sales!
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
                    id="w-node-_56f94684-2855-f944-637b-46cee9b6fab9-265608b3"
                    className="solution-div home-box"
                    data-anim="slide-in-bottom"
                    data-anim-delay="650"
                    data-anim-offset="20"
                  >
                    <div
                      id="w-node-_56f94684-2855-f944-637b-46cee9b6faba-265608b3"
                      className="review-photo small-image"
                    >
                      <img
                        src="/images/image.png"
                        loading="lazy"
                        sizes="100vw"
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
                          <strong>
                            {'He or she Who Endures the Longest, Wins. '}
                            <br />‍
                          </strong>
                          {
                            "Unlock Milton's strategies for 200,000+ sales and peak performance. Boost your energy, master sales tactics, and achieve unmatched success!"
                          }
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
        <section className="_3percent-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="grid-problem-solution">
                  <div className="rl_layout1_content">
                    <h2 className="heading-2 white-color">3 Percent Sales Formula®: Unlock Your Sales Potential</h2>
                    <div className="rl_heading1_spacing-block-2"></div>
                    <p
                      className="rl-text-style-regular is-grey"
                      data-anim="slide-in-bottom"
                      data-anim-delay="450"
                      data-anim-offset="20"
                    >
                      Boost your sales career with the 3 Percent Sales Formula—a proven system to turn average producers
                      into top earners, with consistent monthly sales and annual commissions over $100,000 USD.
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
                  <div className="box-big-wrapper _2">
                    <div className="box-div-2" data-anim="slide-in-bottom" data-anim-delay="350" data-anim-offset="20">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Leads</h4>
                          <p className="rl-text-style-regular is-grey">
                            Attract right-fit clients effortlessly with our proven lead-generation system.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div-2" data-anim="slide-in-bottom" data-anim-delay="500" data-anim-offset="20">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Conversions</h4>
                          <p className="rl-text-style-regular is-grey">
                            Convert 70% of ideal prospects into paying clients with elite sales techniques.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div-2" data-anim="slide-in-bottom" data-anim-delay="750" data-anim-offset="20">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Negotiation</h4>
                          <p className="rl-text-style-regular is-grey">
                            Learn proven strategies to help prospects say yes faster, for their own reasons.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="box-div-2" data-anim="slide-in-bottom" data-anim-delay="950" data-anim-offset="20">
                      <div className="problem-content">
                        <div className="text-content">
                          <h4 className="heading-4 is-white">Mindset</h4>
                          <p className="rl-text-style-regular is-grey">
                            Adopt a top-producer mindset and unlock $100K+ commissions annually!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrow-3">
                  <img
                    src="/images/arrow3.svg"
                    loading="lazy"
                    alt=""
                    className="arrow"
                    data-anim="slide-in-left"
                    data-anim-delay="400"
                    data-anim-offset="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="who-milton-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="rl_layout1_component">
                  <div
                    className="rl_layout1_content"
                    data-anim="slide-in-left"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <div className="milton-home-image">
                      <img
                        src="/images/images.webp"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="/images/images-p-500.webp 500w, /images/images-p-800.webp 800w, /images/images-p-1080.webp 1080w, /images/images-p-1600.webp 1600w, /images/images-p-2000.webp 2000w, /images/images.webp 2540w"
                        alt=""
                        className="image"
                      />
                    </div>
                  </div>
                  <div
                    className="rl_layout1_content numbers"
                    data-anim="slide-in-right"
                    data-anim-delay="350"
                    data-anim-offset="10"
                  >
                    <h2 className="heading-2">Who is Milton Olave?</h2>
                    <p className="medium-text">
                      {
                        'Milton Olave is a globally recognized sales expert and business strategist, renowned for his ability to drive transformative results across industries. With over 20 years of experience, he has helped businesses and sales professionals generate over '
                      }
                      <strong>$2 billion</strong>
                      {
                        ' in sales revenues. His proven 3 Percent Formula® empowers individuals and organizations to break through sales barriers, develop high-performing teams, and consistently close high-value deals.'
                      }
                    </p>
                    <div className="w-layout-grid grid-numbers">
                      <div className="number-div">
                        <h4 className="numbers">250k+</h4>
                        <p className="numbers-description">Salespeople Trained</p>
                      </div>
                      <div className="number-div">
                        <h4 className="numbers">5k+</h4>
                        <p className="numbers-description">{'Sales Trainings '}</p>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <a
                        href="/about"
                        className="rl-button big-button w-button"
                        data-anim="slide-in-bottom"
                        data-anim-delay="400"
                        data-anim-offset="10"
                      >
                        Read more
                      </a>
                    </div>
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
                  <h2 className="heading-2 centre-align">What Tony Robbins says</h2>
                </div>
                <div className="w-layout-grid review-grid">
                  <div
                    id="w-node-f4401a03-9c85-7d81-5083-f10953ecfcd3-265608b3"
                    className="review-div"
                    data-anim="slide-in-bottom"
                    data-anim-delay="450"
                    data-anim-offset="20"
                  >
                    <div className="review-photo">
                      <img
                        src="/images/new-world-new-you.jpg"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="/images/new-world-new-you-p-500.jpg 500w, /images/new-world-new-you-p-800.jpg 800w, /images/new-world-new-you-p-1080.jpg 1080w, /images/new-world-new-you.jpg 1100w"
                        alt=""
                        className="solution-image"
                      />
                    </div>
                    <div className="review-content">
                      <div className="stars-div">
                        <img src="/images/stars.svg" loading="lazy" alt="" />
                      </div>
                      <div className="content-top">
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="medium-text quote-text">
                          {'"'}
                          <strong>
                            <em>{'400+ sales through your sales presentations. '}</em>
                          </strong>
                          <em>
                            {
                              'I know this is one of your top achievements since you’ve been working with us.  Only three other people in the history of my company have ever broken 400. Milton, you are one of them.'
                            }
                          </em>
                          {'"'}
                        </p>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <div className="rl_heading1_spacing-block-1"></div>
                        <p className="rl-text-style-subheading">Tony Robins</p>
                        <p className="medium-text">
                          Author, Philanthropist, and the world’s #1 Life and Business Strategist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-section">
          <div className="rl-padding-global">
            <div className="rl-container-large-2">
              <div className="rl-padding-section-large">
                <div className="heading-wrapper">
                  <h2 className="heading-2 centre-align">Sales Mastery Insights</h2>
                  <p className="medium-text">
                    Gain expert sales strategies and insights from Milton Olave to elevate your performance and achieve
                    top-producer success in competitive markets.
                  </p>
                </div>
                <section className="rl_section_blog44">
                  <div className="rl-container-large-4">
                    <div className="rl_blog44_component">
                      <div className="rl_blog44_list-wrapper">
                        <div className="w-dyn-list">
                          <div role="list" className="collection-list w-dyn-items">
                            {postsBySlug([
                              'the-3-percent-sales-formula-how-top-performers-stand-out-in-competitive-markets',
                              'mastering-emotional-intelligence-for-sales-success-5-skills-every-salesperson-needs',
                              'from-salesperson-to-sales-leader-building-influence-and-achieving-long-term-success',
                            ]).map((post) => (
                              <div role="listitem" className="w-dyn-item" key={post.slug}>
                                <BlogCard post={post} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rl_blog44_button-row-mobile">
                        <div className="rl_blog44_spacing-block-7"></div>
                        <a href="/blog" className="rl-button-3 is-secondary w-button">
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
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
                    sizes="100vw"
                    srcSet="/images/group-1-p-500.png 500w, /images/group-1-p-800.png 800w, /images/group-1-p-1080.png 1080w, /images/group-1.png 1378w"
                    alt=""
                    className="image-cta"
                  />
                </div>
                <div className="cta-image">
                  <img
                    src="/images/1.png"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/images/1-p-500.png 500w, /images/1-p-800.png 800w, /images/1-p-1080.png 1080w, /images/1.png 1378w"
                    alt=""
                    className="image-cta"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
