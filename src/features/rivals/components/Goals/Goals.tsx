import clsx from 'clsx';

export type GoalsProps = {
  goals: string[];
  className?: string;
};

export const Goals = ({ goals, className }: GoalsProps) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col items-center justify-start font-dynalight text-xl'
      )}>
      <h2>Goals</h2>
      <ul className='list-inside list-disc'>
        {goals.map((goal, i) => (
          <li key={i}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};
