import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

export const sectionVariants = cva('flex w-full flex-col items-center', {
  variants: {
    verticalSpacing: {
      md: 'py-10',
      lg: 'py-8 md:py-12',
    },
  },
  defaultVariants: {
    verticalSpacing: 'md',
  },
});

type SectionProps = VariantProps<typeof sectionVariants> &
  HTMLAttributes<HTMLElement> & {
    title?: string;
    subtitle?: string;
    contentWrapperId?: string;
    contentWrapperClassName?: string;
    className?: string;
    classNameReviews?: string;
    children?: ReactNode;
  };

const Section = (props: SectionProps) => {
  const {
    verticalSpacing,
    title,
    subtitle,
    contentWrapperId,
    contentWrapperClassName: _contentWrapperClassName,
    className,
    children,
    classNameReviews,
    ...rest
  } = props;

  return (
    <section
      className={sectionVariants({ verticalSpacing, className })}
      {...rest}
    >
      {(title || subtitle) && (
        <div className="flex flex-col items-center gap-2">
          {title && (
            <h2 className="whitespace-pre-line text-center text-2xl font-extrabold md:text-4xl md:leading-[56px]">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="whitespace-pre-line text-center text-xl font-semibold text-black/30 md:text-3xl">
              {subtitle}
            </h3>
          )}
        </div>
      )}
      <div
        id={contentWrapperId}
        className={`flex w-full flex-col items-center ${classNameReviews ?? ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
