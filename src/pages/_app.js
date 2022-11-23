import { useEffect } from 'react';
import Theme from '../styles/theme';

const useInterceptNextDataHref = ({
  router,
  namespace,
}) => {
  useEffect(() => {
    if (router.pageLoader?.getDataHref) {
      const originalGetDataHref = router.pageLoader.getDataHref;
      router.pageLoader.getDataHref = function (...args) {
        const r = originalGetDataHref.call(router.pageLoader, ...args);
        return r && r.startsWith('/_next/data')
          ? `/${namespace}${r}`
          : r;
      };
    }
  }, [router, namespace]);
};

export default function App({ Component, pageProps, router }) {
  useInterceptNextDataHref({
    router,
    namespace: 'aaug1-website',
  });
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 