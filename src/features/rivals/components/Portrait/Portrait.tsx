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
        'bg-gradient-to-b from-red-700 via-orange-900 to-zinc-800 flex justify-center items-end p-2'
      )}>
      <img src={src} className='max-h-full w-auto' alt='logo' />
    </div>
  );
};
