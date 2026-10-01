import type { Metadata } from 'next';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import { postsBySlug } from '@/content/posts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Gain expert sales strategies and insights from Milton Olave to elevate your performance and achieve top-producer success in competitive markets.',
  openGraph: {
    title: 'Blog',
    description:
      'Gain expert sales strategies and insights from Milton Olave to elevate your performance and achieve top-producer success in competitive markets.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description:
      'Gain expert sales strategies and insights from Milton Olave to elevate your performance and achieve top-producer success in competitive markets.',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
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
                          <div role="list" className="collection-list full w-dyn-items">
                            {postsBySlug([
                              'the-3-percent-sales-formula-how-top-performers-stand-out-in-competitive-markets',
                              'mastering-emotional-intelligence-for-sales-success-5-skills-every-salesperson-needs',
                              'from-salesperson-to-sales-leader-building-influence-and-achieving-long-term-success',
                              'unlocking-the-power-of-persuasion-proven-strategies-for-closing-more-sales',
                              'mastering-consultative-sales-the-art-of-building-relationships-that-close-deals',
                              'unlocking-sales-success-the-psychology-behind-high-performance-selling',
                              'active-listening-in-coaching-how-to-truly-hear-your-clients',
                              'sales-coaching-building-rapport-with-emotional-intelligence',
                              'understanding-the-psychology-of-no',
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
                        <a href="#" className="rl-button-3 is-secondary w-button">
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
