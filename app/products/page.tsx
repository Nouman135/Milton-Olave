import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Unlock your full potential with Milton Olave’s exclusive collection of courses, books, and resources designed to elevate your sales performance and business growth. Whether you're a seasoned professional or just starting out, these products are tailored to accelerate your success.",
  openGraph: {
    title: 'Products',
    description:
      "Unlock your full potential with Milton Olave’s exclusive collection of courses, books, and resources designed to elevate your sales performance and business growth. Whether you're a seasoned professional or just starting out, these products are tailored to accelerate your success.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products',
    description:
      "Unlock your full potential with Milton Olave’s exclusive collection of courses, books, and resources designed to elevate your sales performance and business growth. Whether you're a seasoned professional or just starting out, these products are tailored to accelerate your success.",
  },
};

export default function Page() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <header className="hero-wrapper products">
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
                    {"Milton Olave's Products: Empower Your Sales Journey"}
                  </h1>
                  <div className="rl_heading1_spacing-block-1"></div>
                  <div className="descriptor-wrapper">
                    <p
                      className="medium-text is-white left-align"
                      data-anim="slide-in-bottom"
                      data-anim-delay="320"
                      data-anim-offset="10"
                    >
                      {
                        "Unlock your full potential with Milton Olave’s exclusive collection of courses, books, and resources designed to elevate your sales performance and business growth. Whether you're a seasoned professional or just starting out, these products are tailored to accelerate your success."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="product-section">
          <div className="rl-padding-global-6">
            <div className="rl-container-large-7">
              <div className="rl-padding-section-large-5">
                <div className="rl_testimonial17_component left-align">
                  <div className="large-heading-wrapper">
                    <h2 className="heading-2">Transformative Tools for Sales Excellence</h2>
                    <div className="rl_testimonial17_spacing-block-1"></div>
                    <p className="rl-text-style-medium-5 left-align">
                      {
                        "Explore Milton Olave's range of expertly designed programs, books, and training systems. Whether you’re an aspiring sales professional, a seasoned executive, or a business looking to elevate your team's performance, these resources will guide you toward measurable success."
                      }
                    </p>
                  </div>
                  <div className="product-component">
                    <div className="products_list">
                      <div className="products_accordion">
                        <div className="products-type">
                          <div className="rl_faq1_question-text">Digital courses</div>
                          <div className="rl_faq1_icon-wrapper">
                            <div className="rl_faq1_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="products-wrapper">
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <div className="rl_heading1_spacing-block-1"></div>
                                <h3>
                                  <strong>{'Maestros de la influencia '}</strong>
                                  <span className="text-span-3">
                                    <strong>(Español)</strong>
                                  </span>
                                </h3>
                                <p className="medium-text">
                                  {
                                    '¿Sabías que solo el 3% de los vendedores generan el 97% de los ingresos? Ahora, tú puedes formar parte de este grupo de élite con '
                                  }
                                  <em>Maestros de la Influencia</em>. Este programa digital, compuesto de 11 módulos
                                  ricos en estrategias probadas, está diseñado específicamente para profesionales
                                  hispanos: agentes de ventas, emprendedores y realtors que trabajan por comisión y
                                  desean multiplicar sus ingresos y dominar el arte de vender en menos tiempo.
                                </p>
                              </div>
                              <div className="content-botton">
                                <a href="https://vendiendoconpoder.com/now" target="_blank" className="link">
                                  Read More
                                </a>
                                <div className="icon">
                                  <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper short-option">
                              <img
                                src="/images/image-1.png"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/image-1-p-500.png 500w, /images/image-1-p-800.png 800w, /images/image-1.png 844w"
                                alt=""
                                className="product-image cover-option"
                              />
                            </div>
                          </div>
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <h3>
                                  <strong>
                                    Influence Your Way to Higher Profits
                                    <br />
                                  </strong>
                                </h3>
                                <div className="rl_heading1_spacing-block-1"></div>
                                <p className="medium-text">
                                  {
                                    'Did you know that only 3% of sales professionals generate 97% of the revenue? Now, you can join this elite group with '
                                  }
                                  <em>Influence Your Way to Higher Profits</em>
                                  .This 12-module digital program is designed specifically for sales professionals,
                                  entrepreneurs, and realtors who want to multiply their income, dominate their market,
                                  and master the art of selling—all in less time.
                                </p>
                              </div>
                              <div className="content-botton">
                                <a href="https://businessgrowthseries.com/home" className="link">
                                  Read More
                                </a>
                                <div className="icon">
                                  <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper short-option">
                              <img
                                src="/images/course-2.png"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/course-2-p-500.png 500w, /images/course-2-p-800.png 800w, /images/course-2.png 844w"
                                alt=""
                                className="product-image cover-option"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products_accordion">
                        <div className="products-type">
                          <div className="rl_faq1_question-text">{"Milton Olave's books"}</div>
                          <div className="rl_faq1_icon-wrapper">
                            <div className="rl_faq1_icon w-embed">
                              <svg
                                width=" 100%"
                                height=" 100%"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="products-wrapper">
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <h3>
                                  Momentum: 157 estrategias para emprendedores agotados en búsqueda de productividad y
                                  más éxito (Spanish Edition)
                                </h3>
                                <div className="rl_heading1_spacing-block-1"></div>
                                <p className="medium-text">
                                  ¿Qué separa al vendedor o empresario productivo y el que genera más ingresos en su
                                  industria, del que se encuentra frustrado, cansado y a punto de tirar la toalla?...
                                </p>
                              </div>
                              <div className="div-block-2">
                                <div className="content-botton">
                                  <a
                                    href="https://www.amazon.com/-/es/Milton-Olave-ebook/dp/B095Z4D543/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1DSJOL8DIV08Z&dib=eyJ2IjoiMSJ9.JKB9wfrv11i9wcoum8T_019Pj7VBSwtywyzhG7QkHrVWT1YGXnR3JEH-4cmau1Qaco29VZLLUJga7R25ZEWY9vsfwvPxbWiYmZ-QLGCGMa3jD7iWO7ZFCAZjYs7-OZgYFySmQUGz5Efcf90bch2doSy-aPwzuhUvarin-YiwJrQcKxKnr0rPja5JCdtoWzONi5LSM17NyFX6M-Tq9ZYkvF2f3_2NhPGWezi1g8BukEaVYgni3LhiGo7RB_jyR0a6UEU4rGr_hkAy-3Q_Z2MdYtZI9BenxdcTmIJxnquXwFw.O88fLOKgb6h6V8KOMmDYG5xhlb6yk_3a1liJZvW8Ip0&dib_tag=se&keywords=MILTON+OLAVE&qid=1723832235&sprefix=milton+olive,aps,139&sr=8-1"
                                    target="_blank"
                                    className="link"
                                  >
                                    Read Book
                                  </a>
                                  <div className="icon">
                                    <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                  </div>
                                </div>
                                <div className="content-botton">
                                  <a href="https://amzn.to/3EAvEkt" target="_blank" className="link">
                                    Audiobook
                                  </a>
                                  <div className="icon">
                                    <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper">
                              <img
                                src="/images/momentum-book.webp"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/momentum-book-p-500.webp 500w, /images/momentum-book-p-800.webp 800w, /images/momentum-book-p-1080.webp 1080w, /images/momentum-book.webp 1200w"
                                alt=""
                                className="product-image"
                              />
                            </div>
                          </div>
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <h3>
                                  {'¡Rinde!: 31 secretos para optimizar tu salud y mejorar tu rendimiento '}
                                  <span className="text-span-3">
                                    <strong>(Español)</strong>
                                  </span>
                                </h3>
                                <div className="rl_heading1_spacing-block-1"></div>
                                <p className="medium-text">
                                  Si eres un agente de ventas, te tengo una pregunta: ¿te has puesto a pensar cuánto
                                  dinero dejas sobre la mesa debido al cansancio físico, agotamiento mental y la falta
                                  de energía? ¿Serán $10.000, $20.000, $50.000 dólares al mes o<strong>{' más'}</strong>
                                  ?...
                                </p>
                              </div>
                              <div className="content-botton">
                                <a
                                  href="https://www.amazon.com/-/es/Milton-Olave-ebook/dp/B09M7NCCL9/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1DSJOL8DIV08Z&dib=eyJ2IjoiMSJ9.JKB9wfrv11i9wcoum8T_019Pj7VBSwtywyzhG7QkHrVWT1YGXnR3JEH-4cmau1Qaco29VZLLUJga7R25ZEWY9vsfwvPxbWiYmZ-QLGCGMa3jD7iWO7ZFCAZjYs7-OZgYFySmQUGz5Efcf90bch2doSy-aPwzuhUvarin-YiwJrQcKxKnr0rPja5JCdtoWzONi5LSM17NyFX6M-Tq9ZYkvF2f3_2NhPGWezi1g8BukEaVYgni3LhiGo7RB_jyR0a6UEU4rGr_hkAy-3Q_Z2MdYtZI9BenxdcTmIJxnquXwFw.O88fLOKgb6h6V8KOMmDYG5xhlb6yk_3a1liJZvW8Ip0&dib_tag=se&keywords=MILTON+OLAVE&qid=1723832235&sprefix=milton+olive,aps,139&sr=8-2"
                                  target="_blank"
                                  className="link"
                                >
                                  Read Book
                                </a>
                                <div className="icon">
                                  <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper">
                              <img
                                src="/images/rinde-book.webp"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/rinde-book-p-500.webp 500w, /images/rinde-book-p-800.webp 800w, /images/rinde-book-p-1080.webp 1080w, /images/rinde-book.webp 1200w"
                                alt=""
                                className="product-image"
                              />
                            </div>
                          </div>
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <h3>
                                  Tips Para Favorecer Tu Calidad De Vida: Tips para Transformar Tu calidad de Vida!
                                  (Spanish Edition)
                                </h3>
                                <div className="rl_heading1_spacing-block-1"></div>
                                <p className="medium-text">
                                  En su esperado libro, Tips Para Favorecer Tu Calidad de Vida, Milton Olave nos revela
                                  119 TIPS orientados a mejorar Tu Salud, Tu Físico y Tu Exito. estos consejos tienen el
                                  potencial de hacerte mas saludable, más rico, más seguro y, si, Enamorarte de la
                                  Vida!...
                                </p>
                              </div>
                              <div className="content-botton">
                                <a
                                  href="https://www.amazon.com.au/Tips-Para-Favorecer-Calidad-Vida-ebook/dp/B07YSZ95HF/ref=sr_1_4?dib=eyJ2IjoiMSJ9.v5ETocL17N9r9YkryrkGA_Ztx9LZ1hMu9rKrw1LyWXrF9mW-9DBh0qsF2u8Pxz0Q7BLep_R8st99nJHdYeLPIarHDxtnGeX9u3-GR7cyFEeVabqlwFOzqKsvA-XVVoJ9-AVO5JfvAl2IPKmwzJNAbg.5HKW2v0DQd0FqnWQyc9f5phXux7zvvCZOYfBXWCNR8Q&dib_tag=se&qid=1723832739&refinements=p_27:Milton+Olave&s=books&sr=1-4"
                                  target="_blank"
                                  className="link"
                                >
                                  Read Book
                                </a>
                                <div className="icon">
                                  <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper">
                              <img
                                src="/images/tips-book.webp"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/tips-book-p-500.webp 500w, /images/tips-book-p-800.webp 800w, /images/tips-book-p-1080.webp 1080w, /images/tips-book.webp 1200w"
                                alt=""
                                className="product-image"
                              />
                            </div>
                          </div>
                          <div className="card-product-wrapper">
                            <div className="card-text-wrapper">
                              <div className="content-top">
                                <h3>
                                  {'Tips For a Healthier You: You know you always wanted to look and feel great! '}
                                </h3>
                                <div className="rl_heading1_spacing-block-1"></div>
                                <p className="medium-text">
                                  In his eye opening reading, health and personal development expert Milton Olave
                                  empowers you with 119 success and health tips to give you better health, more
                                  confidence, energy and a head turning physique...
                                </p>
                              </div>
                              <div className="content-botton">
                                <a
                                  href="https://www.amazon.com/-/es/Milton-Olave-ebook/dp/B07YSZ3V2J/ref=sr_1_5?crid=61MW50LG19WI&dib=eyJ2IjoiMSJ9.JKB9wfrv11i9wcoum8T_019Pj7VBSwtywyzhG7QkHrVWT1YGXnR3JEH-4cmau1Qaco29VZLLUJga7R25ZEWY9vsfwvPxbWiYmZ-QLGCGMa3jD7iWO7ZFCAZjYs7-OZgYFySmQUGz5Efcf90bch2doSy-aPwzuhUvarin-YiwJrQcKxKnr0rPja5JCdtoWzONi5LSM17NyFX6M-Tq9ZYkvF2f3_2NhPGWezi1g8BukEaVYgni3LhiGo7RB_jyR0a6UEU4rGr_hkAy-3Q_Z2MdYtZI9BenxdcTmIJxnquXwFw.O88fLOKgb6h6V8KOMmDYG5xhlb6yk_3a1liJZvW8Ip0&dib_tag=se&keywords=MILTON+OLAVE&qid=1723831871&sprefix=milton+olive,aps,147&sr=8-5"
                                  target="_blank"
                                  className="link"
                                >
                                  Read Book
                                </a>
                                <div className="icon">
                                  <img src="/images/chevron-right.svg" loading="lazy" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="card-image-wrapper">
                              <img
                                src="/images/healtier-book.webp"
                                loading="lazy"
                                sizes="(max-width: 991px) 85vw, 34vw"
                                srcSet="/images/healtier-book-p-500.webp 500w, /images/healtier-book-p-800.webp 800w, /images/healtier-book-p-1080.webp 1080w, /images/healtier-book.webp 1200w"
                                alt=""
                                className="product-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
