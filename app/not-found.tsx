import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: '404 - Page not found' };

export default function NotFound() {
  return (
    <div className="main-wrapper">
      <Header />
      <section className="form-section">
        <div className="rl-padding-global">
          <div className="rl-container-large">
            <div className="rl-padding-section-large">
              <p className="medium-text centre-align">404</p>
              <h1 className="heading-2 centre-align">Page not found</h1>
              <p className="medium-text centre-align">
                The page you are looking for doesn&apos;t exist or has been moved.
              </p>
              <div className="rl_heading1_spacing-block-2"></div>
              <div className="rl-button-group centre-align">
                <a href="/" className="rl-button w-button">
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
