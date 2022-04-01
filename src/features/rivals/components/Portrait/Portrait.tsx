import clsx from 'clsx';

export type PortraitProps = {
  src: string;
  className?: string;
};

export const Portrait = ({ src, className }: PortraitProps) => {
  return (
    <div
      className={clsx(
        className,
        'bg-gradient-to-b from-red-700 via-orange-900 to-white flex justify-center items-center '
      )}>
      <img src={src} className='h-full' alt='logo' />
    </div>
  );
};
