export type ItemProps = {
  title: string;
  image: string;
  isTitleFirst?: boolean;
};

const Item = (props: ItemProps) => {
  const { title, image, isTitleFirst } = props;

  return (
    <div className="flex flex-col gap-8 px-5 md:grid md:grid-cols-2 md:gap-20">
      <img
        src={image}
        className={`h-full w-full object-contain ${!isTitleFirst ? 'md:order-2' : ''}`}
        alt="Possibilities image"
      />
      <div className="flex items-center text-center text-xl font-semibold md:text-left md:text-3xl">
        {title}
      </div>
    </div>
  );
};

export default Item;
