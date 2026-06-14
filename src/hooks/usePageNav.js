import { useLocation, useNavigate } from 'react-router-dom';

export function usePageNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';

  return (href) => {
    if (href === '/') {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (href.startsWith('/#')) {
      const hash = href.slice(1); // e.g. '#contact'
      if (isHome) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };
}
