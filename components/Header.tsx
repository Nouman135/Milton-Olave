'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// Port of the Webflow "Navbar 1" component: hover dropdown on desktop, hamburger menu below 992px.
const SOLUTION_LINKS: [string, string][] = [
  ['/sales-training', 'Sales Training'],
  ['/virtual-training', 'Virtual Training'],
  ['/workshops-and-seminars', 'Workshops and Seminars'],
];
const LINKS: [string, string][] = [
  ['/who-we-serve', 'Who we serve'],
  ['/speaking', 'Speaking'],
  ['/for-meeting-planers', 'Meeting Planner'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/reviews', 'Reviews'],
  ['/media', 'Media'],
  ['/blog', 'Blog'],
];
const TABLET_QUERY = '(max-width: 991px)';
const HOVER_CLOSE_DELAY = 200;

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track the breakpoint; the mobile menu closes when the viewport grows past it.
  useEffect(() => {
    const mq = window.matchMedia(TABLET_QUERY);
    const sync = () => {
      setIsTablet(mq.matches);
      if (!mq.matches) setMenuOpen(false);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Clicking anywhere else, or pressing Escape, closes the dropdown.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [dropdownOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // Desktop: open on hover, close 200ms after the pointer leaves. Tablet and below: tap to toggle.
  const hoverOpen = () => {
    if (isTablet) return;
    window.clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const hoverClose = () => {
    if (isTablet) return;
    closeTimer.current = window.setTimeout(() => setDropdownOpen(false), HOVER_CLOSE_DELAY);
  };
  const toggleDropdown = () => setDropdownOpen((open) => !open);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const onActivate = (action: () => void) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const isCurrent = (href: string) => pathname === href;
  const currentProps = (href: string) => (isCurrent(href) ? { 'aria-current': 'page' as const } : {});

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="rl_navbar1_component navbar w-nav"
    >
      <div className="rl_navbar1_container">
        <a
          href="/"
          className={cx('rl_navbar1_logo-link w-nav-brand', isCurrent('/') && 'w--current')}
          {...currentProps('/')}
        >
          <img
            sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, (max-width: 1500px) 100vw, 1500px"
            srcSet="/images/concepto-3-variante-2-p-500.png 500w, /images/concepto-3-variante-2-p-800.png 800w, /images/concepto-3-variante-2-p-1080.png 1080w, /images/concepto-3-variante-2.png 1500w"
            alt=""
            src="/images/concepto-3-variante-2.png"
            loading="lazy"
            className="rl_navbar2_logo"
          />
        </a>
        <nav
          role="navigation"
          id="w-nav-menu-0"
          className="rl_navbar1_menu is-page-height-tablet w-nav-menu"
          data-nav-menu-open={menuOpen ? '' : undefined}
        >
          <div
            ref={dropdownRef}
            className={cx('rl_navbar2_menu-dropdown w-dropdown', menuOpen && 'w--nav-dropdown-open')}
            onMouseEnter={hoverOpen}
            onMouseLeave={hoverClose}
          >
            <div
              className={cx(
                'rl_navbar2_dropdwn-toggle w-dropdown-toggle',
                dropdownOpen && 'w--open',
                menuOpen && 'w--nav-dropdown-toggle-open',
              )}
              id="w-dropdown-toggle-0"
              aria-controls="w-dropdown-list-0"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
              role="button"
              tabIndex={0}
              onClick={toggleDropdown}
              onKeyDown={onActivate(toggleDropdown)}
            >
              <div className="rl-dropdown-icon w-embed">
                <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="rl_navbar2_link-text">Solution</div>
            </div>
            <nav
              className={cx(
                'rl_navbar2_dropdown-list w-dropdown-list',
                dropdownOpen && 'w--open',
                menuOpen && 'w--nav-dropdown-list-open',
              )}
              id="w-dropdown-list-0"
              aria-labelledby="w-dropdown-toggle-0"
            >
              {SOLUTION_LINKS.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className={cx('rl_navbar2_dropdown-link w-dropdown-link', isCurrent(href) && 'w--current')}
                  tabIndex={0}
                  {...currentProps(href)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={cx(
                'rl_navbar2_link w-nav-link',
                isCurrent(href) && 'w--current',
                menuOpen && 'w--nav-link-open',
              )}
              {...currentProps(href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div
          className={cx('rl_navbar1_menu-button w-nav-button', menuOpen && 'w--open')}
          aria-label="menu"
          role="button"
          tabIndex={0}
          aria-controls="w-nav-menu-0"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          onKeyDown={onActivate(toggleMenu)}
        >
          <div className="rl_menu-icon">
            <div className="rl_menu-icon_line-top"></div>
            <div className="rl_menu-icon_line-middle">
              <div className="rl_menu-icon_line-middle-inner-2"></div>
            </div>
            <div className="rl_menu-icon_line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
