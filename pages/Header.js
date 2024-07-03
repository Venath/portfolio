// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleRouteChange = (url) => {
      setActivePath(url);
    };

    // Set active path initially on component mount
    setActivePath(router.asPath);

    // Set active path on route change
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li className={activePath === '#home' ? 'active' : ''}>
            <a href="#home">Home</a>
          </li>
          <li className={activePath === '#projects' ? 'active' : ''}>
            <a href="#projects">Projects</a>
          </li>
          {/* <li className={activePath === '#contact' ? 'active' : ''}>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </nav>
      <style jsx>{`
       nav {
        //   display: flex;
        //   justify-content: flex-end; /* Align items to the right */
        }
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #333;
          color: #fff;
          z-index: 1000;
          padding: 1rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 3rem;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          display: block;
        }
        nav ul li a:hover,
        nav ul li.active a {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.25rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
