import type { Post } from '@/content/posts';

// "Blog 44" card from the Webflow CMS lists (home, /blog, related posts).
export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="rl_blog44_item">
      <a href={`/post/${post.slug}`} className="rl_blog44_item-link w-inline-block">
        <div className="rl_blog44_image-wrapper">
          <img
            src={post.cardImage.src}
            loading="lazy"
            alt=""
            sizes={post.cardImage.sizes}
            srcSet={post.cardImage.srcSet}
            className="rl_blog44_image"
          />
        </div>
        <div className="rl_blog44_item-content">
          <div className="rl_blog44_item-content-top">
            <div className="rl_blog44_meta-wrapper">
              <div className="rl_blog44_category">
                <div className="rl_blog44_category-text">{post.category}</div>
              </div>
              <div className="rl_blog44_read-time-text">{post.readTime}</div>
            </div>
            <div className="rl_blog44_spacing-block-4"></div>
            <h3 className="rl-heading-style-h5">{post.title}</h3>
            <div className="rl_blog44_spacing-block-5"></div>
            <div className="rl-text-style-regular-2">{post.summary}</div>
          </div>
          <div className="rl_blog44_spacing-block-6"></div>
          <div className="rl-button-link-2">
            <div className="rl-button-link-text-2">Read more</div>
            <div className="rl-button-link-icon-2 w-embed">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
