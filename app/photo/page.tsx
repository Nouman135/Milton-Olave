import type { Metadata } from 'next';
import Header from '@/components/Header';
import LightboxLink from '@/components/LightboxLink';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Photo',
  description:
    'Discover Milton Olave’s insights through interviews, podcasts, and videos, empowering audiences to achieve "More Sales, More Income, More Life."',
  openGraph: {
    title: 'Photo',
    description:
      'Discover Milton Olave’s insights through interviews, podcasts, and videos, empowering audiences to achieve "More Sales, More Income, More Life."',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo',
    description:
      'Discover Milton Olave’s insights through interviews, podcasts, and videos, empowering audiences to achieve "More Sales, More Income, More Life."',
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <section className="photo-section">
          <div className="rl-padding-global-6">
            <div className="rl-container-large-7">
              <div className="rl-padding-section-large-7">
                <div className="rl_gallery10_component">
                  <div className="rl_gallery10_heading-wrapper">
                    <h2 className="rl-heading-style-h2-6">Download Hi-Res Photos for Promotional Use</h2>
                    <div className="rl_gallery10_spacing-block-1"></div>
                  </div>
                  <div className="rl_gallery10_masonry-grid">
                    <LightboxLink
                      id="w-node-_8571bf0b-8950-1ff9-67fb-64b51ef8cee3-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/mmilton-photo.webp', width: 1232, height: 1848 }}
                    >
                      <img
                        src="/images/mmilton-photo.webp"
                        loading="lazy"
                        sizes="(max-width: 1232px) 100vw, 1232px"
                        srcSet="/images/mmilton-photo-p-500.webp 500w, /images/mmilton-photo-p-800.webp 800w, /images/mmilton-photo-p-1080.webp 1080w, /images/mmilton-photo.webp 1232w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/milton-olave-9129.jpg', width: 1000, height: 667 }}
                    >
                      <img
                        src="/images/milton-olave-9129.jpg"
                        loading="lazy"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                        srcSet="/images/milton-olave-9129-p-500.jpg 500w, /images/milton-olave-9129-p-800.jpg 800w, /images/milton-olave-9129.jpg 1000w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{
                        src: 'https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg',
                        width: 150,
                        height: 150,
                      }}
                    >
                      <img
                        src="/images/milton-olave-handswaist-2.jpg"
                        loading="lazy"
                        sizes="(max-width: 1313px) 100vw, 1313px"
                        srcSet="/images/milton-olave-handswaist-2-p-500.jpg 500w, /images/milton-olave-handswaist-2-p-800.jpg 800w, /images/milton-olave-handswaist-2-p-1080.jpg 1080w, /images/milton-olave-handswaist-2.jpg 1313w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-c32cbb23-3858-639a-5f12-9b93c87cd7fc-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave1.png', width: 1688, height: 2160 }}
                    >
                      <img
                        src="/images/miltonolave1.png"
                        loading="lazy"
                        sizes="(max-width: 1688px) 100vw, 1688px"
                        srcSet="/images/miltonolave1-p-500.png 500w, /images/miltonolave1-p-800.png 800w, /images/miltonolave1-p-1080.png 1080w, /images/miltonolave1-p-1600.png 1600w, /images/miltonolave1.png 1688w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-bbc7e089-0c0f-72a6-7f77-0da2e795a8ef-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave6.png', width: 1708, height: 1752 }}
                    >
                      <img
                        src="/images/miltonolave6.png"
                        loading="lazy"
                        sizes="(max-width: 1708px) 100vw, 1708px"
                        srcSet="/images/miltonolave6-p-500.png 500w, /images/miltonolave6-p-800.png 800w, /images/miltonolave6-p-1080.png 1080w, /images/miltonolave6-p-1600.png 1600w, /images/miltonolave6.png 1708w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-_374c006e-44d4-2540-2ce1-35252a7235f8-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave7.png', width: 1334, height: 1580 }}
                    >
                      <img
                        src="/images/miltonolave7.png"
                        loading="lazy"
                        sizes="(max-width: 1334px) 100vw, 1334px"
                        srcSet="/images/miltonolave7-p-500.png 500w, /images/miltonolave7-p-800.png 800w, /images/miltonolave7-p-1080.png 1080w, /images/miltonolave7.png 1334w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-_78408a11-a807-1fca-6f38-60f09b8197fb-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave8.png', width: 840, height: 840 }}
                    >
                      <img
                        src="/images/miltonolave8.png"
                        loading="lazy"
                        sizes="(max-width: 840px) 100vw, 840px"
                        srcSet="/images/miltonolave8-p-500.png 500w, /images/miltonolave8-p-800.png 800w, /images/miltonolave8.png 840w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-_8caca763-5fbb-b488-5942-65710017aaeb-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave3.png', width: 1194, height: 1100 }}
                    >
                      <img
                        src="/images/miltonolave3.png"
                        loading="lazy"
                        sizes="(max-width: 1194px) 100vw, 1194px"
                        srcSet="/images/miltonolave3-p-500.png 500w, /images/miltonolave3-p-800.png 800w, /images/miltonolave3-p-1080.png 1080w, /images/miltonolave3.png 1194w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-_8ea3a0da-6928-3940-15ec-5a5ba5369e01-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave4.jpg', width: 760, height: 816 }}
                    >
                      <img
                        src="/images/miltonolave4.jpg"
                        loading="lazy"
                        sizes="(max-width: 760px) 100vw, 760px"
                        srcSet="/images/miltonolave4-p-500.jpg 500w, /images/miltonolave4.jpg 760w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
                    <LightboxLink
                      id="w-node-b2f1db26-4863-17ff-11ad-3b6fa86be494-8aa75317"
                      className="rl_gallery10_lightbox-link w-inline-block w-lightbox"
                      image={{ src: '/images/miltonolave9.jpg', width: 914, height: 1092 }}
                    >
                      <img
                        src="/images/miltonolave9.jpg"
                        loading="lazy"
                        sizes="(max-width: 914px) 100vw, 914px"
                        srcSet="/images/miltonolave9-p-500.jpg 500w, /images/miltonolave9-p-800.jpg 800w, /images/miltonolave9.jpg 914w"
                        alt=""
                        className="rl_gallery10_image"
                      />
                    </LightboxLink>
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
