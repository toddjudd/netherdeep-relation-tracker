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
      <h1 className='font-dynalight text-5xl text-red-800 '>{name}</h1>
    </div>
  );
};
