import { useEffect } from 'react';

export default function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isLocked ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [isLocked]);
}
