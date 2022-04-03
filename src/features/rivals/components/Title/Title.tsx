import clsx from 'clsx';
export type TitleProps = {
  name: string;
  className?: string;
};

export const Title = ({ name, className }: TitleProps) => {
  return (
    <div
      className={clsx(
        className,
        'flex align-middle justify-center text-center'
      )}>
      <h1 className='font-montserrat text-3xl text-red-700 '>{name}</h1>
    </div>
  );
};
