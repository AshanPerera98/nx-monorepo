import { ComponentProps } from 'react';

export * from './tailwind-base.css';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export function UiButton({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-200';

  const variantClasses = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-400',
    secondary:
      'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export default UiButton;
