import StarIcon from '../../../icons/star.svg?react';

export type ReviewProps = {
  avatar: string;
  name: string;
  username: string;
  rating: number;
  text: string;
  className?: string;
};

const Review = (props: ReviewProps) => {
  const { avatar, name, username, rating, text } = props;

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-black/5 p-6 lg:p-8">
      <section className="flex w-full justify-between gap-2">
        <div className="flex w-full gap-3">
          <img
            src={avatar}
            className="h-10 w-10 rounded-full object-cover"
            alt="Reviewer avatar"
          />
          <div className="flex flex-col">
            <p className="truncate text-sm font-semibold">{name}</p>
            <p className="text-sm font-medium text-black/60">@{username}</p>
          </div>
        </div>
        <div className="flex justify-center gap-0.5">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} className="h-4 w-4 fill-[#FFCC00]" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, index) => (
            <StarIcon key={index} className="h-4 w-4 fill-black/10" />
          ))}
        </div>
      </section>
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="line-clamp-[10] text-base"
      ></p>
    </div>
  );
};

export default Review;
