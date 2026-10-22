import { useLocation } from 'react-router-dom';
import { Seo } from '@/components/common/Seo';
import { PAGES } from '@/lib/seo';

// Meta tags únicos por ruta. /home/:id es un alias de la home; una ruta desconocida no se indexa.
export const RouteSeo = () => {
  const { pathname } = useLocation();
  const path = pathname.startsWith('/home/') ? '/' : pathname.replace(/\/$/, '') || '/';
  const page = PAGES[path];
  if (!page) return <Seo title="Página no encontrada | LED Sports" description={PAGES['/'].description} path="/" noindex />;
  return <Seo {...page} path={path} />;
};
