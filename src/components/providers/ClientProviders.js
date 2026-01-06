import { ModalProvider } from '@/context/ModalContext';
import ContactModal from '@/components/ui/ContactModal';

export default function ClientProviders({ children }) {
  return (
      <ModalProvider>
        {children}
        <ContactModal />
      </ModalProvider>
  );
}
