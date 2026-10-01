import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Condition',
  openGraph: {
    title: 'Terms and Condition',
  },
  twitter: {
    title: 'Terms and Condition',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <section className="form-section">
          <div className="rl-padding-global-8">
            <div className="legal-container">
              <div className="padding-form">
                <div className="form-audio">
                  <div className="legal-wrapper">
                    <h2 className="rl-heading-style-h2-5">
                      <strong>Terms Of use</strong>
                      <br />
                      <span className="text-update">
                        <strong>{'Last Updated: '}</strong>
                        December 7, 2024
                      </span>
                    </h2>
                    <div className="rl_contact1_spacing-block-2"></div>
                    <div className="requires">
                      <p className="rl-text-style-medium-6 left-align">
                        {'Welcome to '}
                        <a href="http://www.miltonolave.com/">
                          <strong>www.miltonolave.com</strong>
                        </a>
                        {', operated by '}
                        <strong>Empowerment Leadership Corp</strong>
                        {
                          ' (“we,” “us,” or “our”). By accessing or using our website, purchasing our services, or enrolling in our training programs, you agree to comply with and be bound by these Terms and Conditions (“Terms”). Please read them carefully.If you do not agree to these Terms, please do not use our website or services. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          1. General Information
                          <br />‍
                        </strong>
                        1.1. These Terms govern your use of the website, and any services, products, or content provided
                        through it.
                        <br />
                        {
                          '1.2. By using the website, you confirm that you are at least 18 years of age or have the legal authority to enter into this agreement. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          2. Intellectual Property
                          <br />‍
                        </strong>
                        {
                          '2.1. All content on this website, including but not limited to text, graphics, logos, videos, courses, PDFs, and trademarks, is owned by or licensed to '
                        }
                        <strong>Milton Olave</strong>
                        {' and '}
                        <strong>Empowerment Leadership Corporation</strong>
                        , a U.S corporation registered in the state of Florida and is protected by intellectual property
                        laws.
                        <br />
                        2.2. You may not copy, reproduce, distribute, or create derivative works based on our content
                        without prior written consent.
                        <br />
                        {
                          '2.3. Your purchase of a course or service provides you with a non-transferable, limited license for personal use only. Sharing or reselling access is strictly prohibited. '
                        }
                        <br />
                        ‍
                        <br />‍
                        <strong>
                          3. User Conduct
                          <br />‍
                        </strong>
                        3.1. You agree not to:Use the website for unlawful purposes.Share your login credentials or
                        allow unauthorized access to your account.
                        <br />
                        {
                          'Attempt to hack, disable, or disrupt the functionality of the website.Post defamatory, offensive, or misleading content on our platform or affiliated communities. '
                        }
                        <br />
                        ‍
                        <br />‍
                        <strong>
                          4. Payment Terms
                          <br />‍
                        </strong>
                        {'4.1. '}
                        <strong>Purchases</strong>
                        : All purchases for services, courses, or products must be made through our website or
                        authorized payment channels.
                        <br />
                        {'4.2. '}
                        <strong>Refunds</strong>
                        : Refunds for courses or services will be processed in accordance with our Refund Policy (see
                        Section 5).
                        <br />
                        {'4.3. '}
                        <strong>Subscription Renewals</strong>
                        {
                          ': If applicable, subscriptions will automatically renew unless canceled prior to the renewal date. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          5. Refund Policy
                          <br />‍
                        </strong>
                        {'5.1. Refunds are available for digital courses only within '}
                        <strong>[30 days]</strong>
                        {' of purchase, provided the course content has not been accessed.'}
                        <br />
                        {'5.2. Refund requests must be submitted via email to '}
                        <strong>[info@eleadershipcorp.com]</strong>
                        {' and include proof of purchase.'}
                        <br />
                        {
                          '5.3. Services such as live coaching sessions or group training programs are non-refundable once they have commenced. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          6. Limitation of Liability
                          <br />‍
                        </strong>
                        6.1. We strive to provide accurate and effective sales training content; however, we make no
                        guarantees regarding your specific results.
                        <br />
                        6.2. To the fullest extent permitted by law, we are not liable for:Loss of income, revenue, or
                        business opportunities resulting from the use of our website or services.
                        <br />
                        {'Technical issues or interruptions in accessing the website. '}
                        <br />
                        <br />‍
                        <strong>
                          7. Privacy Policy
                          <br />‍
                        </strong>
                        {'7.1. Your privacy is important to us. Please refer to our '}
                        <strong>Privacy Policy</strong>
                        {' [insert hyperlink] for details on how we collect, use, and store your personal data.'}
                        <br />
                        {
                          '7.2. By using our website, you consent to the collection and use of your data in accordance with our Privacy Policy. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          8. Dispute Resolution
                          <br />‍
                        </strong>
                        {'8.1. '}
                        <strong>Governing Law</strong>
                        {': These Terms are governed by the laws of '}
                        <strong>Broward County, Florida</strong>
                        {', '}
                        <strong>USA.</strong>
                        <br />
                        {'8.2. '}
                        <strong>Arbitration</strong>
                        : Any disputes arising under these Terms will be resolved through binding arbitration in
                        accordance with the rules of the American Arbitration Association.
                        <br />
                        {
                          '8.3. You waive your right to participate in class action lawsuits related to the use of our services. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          9. Termination
                          <br />‍
                        </strong>
                        9.1. We reserve the right to terminate or suspend access to our website or services for users
                        who violate these Terms or engage in unlawful behavior.
                        <br />
                        {'9.2. Upon termination, your license to use our content will be revoked. '}
                        <br />
                        <br />‍
                        <strong>
                          10. Changes to These Terms
                          <br />‍
                        </strong>
                        10.1. We reserve the right to modify these Terms at any time.
                        <br />
                        {
                          '10.2. Any changes will be effective upon posting on the website, and continued use of the site constitutes acceptance of the updated Terms. '
                        }
                        <br />
                        <br />‍
                        <strong>
                          11. Contact Us
                          <br />‍
                        </strong>
                        If you have questions about these Terms, please contact us at:
                        <br />
                        <strong>Email</strong>
                        : info@eleadershipcorp.com
                        <br />
                        <strong>Phone</strong>
                        {': (305) 466-7000 '}
                        <br />
                        <br />‍
                        <strong>
                          Acknowledgment
                          <br />‍
                        </strong>
                        By using this website, you acknowledge that you have read, understood, and agree to these Terms
                        and Conditions.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="rl_contact1_spacing-block-3"></div>
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
