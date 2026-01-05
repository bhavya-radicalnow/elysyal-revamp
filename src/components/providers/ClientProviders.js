import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ModalProvider } from '@/context/ModalContext';
import ContactModal from '@/components/ui/ContactModal';

export default function ClientProviders({ children }) {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <ModalProvider>
        {children}
        <ContactModal />
      </ModalProvider>
    </SkeletonTheme>
  );
}
