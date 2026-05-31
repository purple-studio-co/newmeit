import { asset } from '../../utils/asset';
import Item, { ItemProps } from './Item';
import Section from './Section';

const Possibilities = () => {
  const possibilities: ItemProps[] = [
    {
      title: 'Создавать контент — сториз, посты или рилз',
      image: asset('/images/possibilty1.png'),
      isTitleFirst: true,
    },
    {
      title: 'Придумывать идеи и планы для прогрева аудитории',
      image: asset('/images/possibilty2.png'),
    },
    {
      title: 'Делать распаковку экспертности и личности',
      image: asset('/images/possibilty3.png'),
      isTitleFirst: true,
    },
    {
      title: 'Отвечать на любые вопросы в чате, как ChatGPT',
      image: asset('/images/possibilty4.png'),
    },
  ];

  return (
    <Section
      title="Что умеет Ньюми?"
      verticalSpacing="lg"
      contentWrapperClassName="gap-4 items-start"
      classNameReviews="pb-12"
    >
      {possibilities.map((possibility, index) => (
        <Item key={index} {...possibility} />
      ))}
    </Section>
  );
};

export default Possibilities;
