import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { postBySlug, posts, postsBySlug } from '@/content/posts';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = postBySlug((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.description ?? post.summary };
}

// "Blog post 1" template from the Webflow CMS.
export default async function PostPage({ params }: Params) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <header className="rl_section_blogpost1">
        <div className="rl-padding-global-6">
          <div className="rl-container-large-7">
            <div className="rl-padding-section-lblogy">
              <div className="rl_blogpost1_component">
                <div className="rl_blogpost1_title-wrapper">
                  <div className="rl_blogpost1_breadcrumb">
                    <a href="/blog" className="w-inline-block">
                      <div className="rl-breadcrumb-divider w-embed">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="/blog" className="rl-breadcrumb-link w-inline-block">
                      <div className="rl-breadcrumb-text">Back</div>
                    </a>
                  </div>
                  <div className="rl_blogpost1_spacing-block-1"></div>
                  <h1 className="rl-heading-style-h2">{post.title}</h1>
                </div>
                <div className="rl_blogpost1_spacing-block-3"></div>
                <div className="rl_blogpost1_image-wrapper">
                  <img
                    src={post.image.src}
                    loading="lazy"
                    alt=""
                    sizes={post.image.sizes}
                    srcSet={post.image.srcSet}
                    className="rl_blogpost1_image"
                  />
                </div>
                <div className="rl_blogpost1_content">
                  <div className="rl-text-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: post.body }} />
                  <div className="rl_blogpost1_spacing-block-5"></div>
                  <div className="rl_blogpost1_divider"></div>
                </div>
                <div className="rl_blogpost1_content recommended">
                  <div className="rl_blogpost1_spacing-block-4"></div>
                  <div className="heading-wrapper blog">
                    <h2 className="heading-2 centre-align">Related posts</h2>
                    <p>
                      Gain expert sales strategies and insights from Milton Olave to elevate your performance and
                      achieve top-producer success in competitive markets.
                    </p>
                  </div>
                  <div className="rl_blogpost1_spacing-block-short"></div>
                  <div className="rl_blogpost1_spacing-block-5">
                    <div className="rl_blog44_list-wrapper">
                      <div className="releted-posts w-dyn-list">
                        <div role="list" className="collection-list releted w-dyn-items">
                          {postsBySlug(post.related).map((related) => (
                            <div role="listitem" className="w-dyn-item" key={related.slug}>
                              <BlogCard post={related} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
