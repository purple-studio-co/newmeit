import { ReactNode } from 'react';

type FeatureProps = {
  title: string;
  description: string;
  animationDelay: number;
  className?: string;
  children: ReactNode;
};

const Feature = (props: FeatureProps) => {
  const { title, description, children } = props;

  return (
    <div className="relative flex min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-black/5 p-8 md:min-w-80">
      <p
        className="text-2xl font-bold leading-[40px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Feature;
