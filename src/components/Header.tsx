import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Header = (): ReactElement => (
  <header
    className="m-grid__item    m-header "
    data-minimize-offset={200}
    data-minimize-mobile-offset={200}
  >
    <div className="m-container m-container--fluid m-container--full-height">
      <div className="m-stack m-stack--ver m-stack--desktop">
        <div className="m-stack__item m-brand  m-brand--skin-dark ">
          <div className="m-stack m-stack--ver m-stack--general">
            <div className="m-stack__item m-stack__item--middle m-brand__logo">
              <Link to="/characters" className="m-brand__logo-wrapper">
                <img
                  alt="Logo"
                  src="/images/Rick_and_Morty.png"
                  height="70"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="m-stack__item m-stack__item--fluid m-header-head"
          id="m_header_nav"
        >
          <div
            id="m_header_menu"
            className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark "
          >
            <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
              <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel">
                <Link to="/characters" className="m-link m-link--brand m--font-bolder">
                  Charters
                </Link>
              </li>
              <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel">
                <Link to="/episodes" className="m-link m-link--brand m--font-bolder">
                  Episodes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
