import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import data from './data/content.json';

export default function App() {
  const { identity, seo } = data;

  useEffect(() => {
    if (seo?.title) {
      document.title = seo.title;
    }
    if (seo?.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seo.description);
      }
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seo.description);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && seo.title) {
        ogTitle.setAttribute('content', seo.title);
      }
    }
  }, [seo]);

  return (
    <div className="app">
      <Header identity={identity} />
      <main>
        <Outlet />
      </main>
      <Footer identity={identity} />
    </div>
  );
}
