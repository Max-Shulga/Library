import { Button as BaseButton, type ButtonProps } from '@base-ui/react/button';
import { forwardRef } from 'react';

import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return <BaseButton ref={ref} className={`${styles.button} ${className ?? ''}`} {...props} />;
});

Button.displayName = 'Button';

export default Button;
