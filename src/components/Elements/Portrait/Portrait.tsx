export type PortraitProps = {
  src: string;
};

export const Portrait = ({ src }: PortraitProps) => {
  return (
    <div className='bg-gradient-to-b from-red-700 via-orange-900 to-white flex align-middle justify-center'>
      <img src={src} className='h-auto w-auto' alt='logo' />;
    </div>
  );
};
