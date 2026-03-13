'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useEffect } from 'react';

import styles from './Modal.module.css';

import type { TModal } from './models/modal.models';

const Modal = ({ open, onOpenChange, children }: TModal) => {
  const { refs, context } = useFloating({
    open,
    onOpenChange,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: true,
    escapeKey: true,
  });
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <FloatingPortal>
      <FloatingOverlay lockScroll className={styles.overlay}>
        <FloatingFocusManager context={context}>
          <div ref={refs.setFloating} {...getFloatingProps()} className={styles.content}>
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};

export default Modal;
