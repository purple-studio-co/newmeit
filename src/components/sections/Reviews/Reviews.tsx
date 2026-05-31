import { ReactNode } from 'react';
import Section from '../Section';
import Review, { ReviewProps } from './Review';
import { asset } from '../../../utils/asset';

type ReviewsProps = {
  title?: string;
  subtitle?: string;
};

type ReviewsColumnProps = {
  className?: string;
  children: ReactNode;
};

const ReviewsColumn = ({ children }: ReviewsColumnProps) => {
  return (
    <div className="flex flex-col flex-wrap justify-start gap-4 md:flex-row">
      {children}
    </div>
  );
};

const Reviews = (props: ReviewsProps) => {
  const { title = 'what-users-say', subtitle = 'we-limited-users-amount' } =
    props;

  const firstColumnMockReviews: ReviewProps[] = [
    {
      avatar: asset('/images/mockAvatar1.png'),
      name: 'Людмила Идрисова',
      username: 'Idrisova_ya',
      rating: 5,
      text: 'Это просто <b>революция на&nbsp;рынке инфобизнеса</b>, спасибо ребята',
    },
    {
      avatar: asset('/images/mockAvatar2.png'),
      name: 'Татьяна Шатская',
      username: 'shatskaya_tatiana',
      rating: 5,
      text: 'Спасибо вам! <b>Решение задач в&nbsp;пару кликов!</b>&nbsp;А&nbsp;какая работа команды за кадром🔥🔥🔥',
    },
    {
      avatar: asset('/images/mockAvatar6.png'),
      name: 'Юлия Переверзева',
      username: 'inspiringproducer',
      rating: 5,
      text: 'Сделала вчера по Ньюми сторис: <b>ни одного изменения не&nbsp;внесла- все&nbsp;как&nbsp;есть вставила😍</b>',
    },
    {
      avatar: asset('/images/mockAvatar5.png'),
      name: 'Евгения',
      username: 'Evgenia_Malina',
      rating: 5,
      text: 'Ньюми действительно <b>сильно облегчает работу</b>, сейчас в&nbsp;работе 2 проекта и&nbsp;без Ньюми пока сложно представить как&nbsp;успевать дальше 😅',
    },
  ];

  const secondColumnMockReviews: ReviewProps[] = [
    {
      avatar: asset('/images/mockAvatar4.png'),
      name: 'Женя Иванова',
      username: 'rockmeenglish',
      rating: 5,
      text: 'ОМГ!!&nbsp;Я что попала в&nbsp;сказку?! Он и&nbsp;сценарии пишет 😭😭😭 Держите меня, я&nbsp;сейчас улечу в&nbsp;стратосферу. Блин, простите эти эмоции, но&nbsp;этот сервис - <b>то, чего мне не&nbsp;хватало ПЯТЬ ЛЕТ ведения блога!!!</b>&nbsp;Я&nbsp;реально сижу со слезами на&nbsp;глазах сейчас.',
    },
    {
      avatar: asset('/images/mockAvatar7.png'),
      name: 'Олеся Балакина',
      username: 'Leseok',
      rating: 5,
      text: 'Итак, хочу поделиться первыми результатами: <b>я в&nbsp;восторге</b>, сделала два поста для&nbsp;своего телеграмм канала, и&nbsp;мои <b>подписчики</b> уже ночью <b>начали давать свои комментарии</b>, да ещё и&nbsp;такие развёрнутые, что&nbsp;бывает, точнее бывало пока очень редко',
    },
    {
      avatar: asset('/images/mockAvatar3.png'),
      name: 'Анна Агикова',
      username: 'agikova',
      rating: 5,
      text: 'Круто, что&nbsp;вы&nbsp;так всё фиксируете, и&nbsp;такую работу провели 🫰🏼. <b>Поднялась мотивация к&nbsp;созданию контента 🙌🏻 🥳</b>',
    },
    {
      avatar: asset('/images/mockAvatar8.png'),
      name: 'Анна Ципан',
      username: 'tsipan_lab',
      rating: 5,
      text: 'Нужно предупреждение писать ещё: ОСТОРОЖНО! <b>Вызывает привыкание🤪</b>',
    },
  ];

  return (
    <Section
      title={title}
      subtitle={subtitle}
      verticalSpacing="lg"
      className="gap-6 md:gap-10"
      contentWrapperClassName="grid w-full gap-2 items-start md:grid-cols-2"
      classNameReviews="lg:grid lg:grid-cols-2 lg:items-start gap-4"
    >
      <ReviewsColumn>
        {firstColumnMockReviews.map((item, index) => (
          <Review key={index} {...item} />
        ))}
      </ReviewsColumn>
      <ReviewsColumn className="hidden md:flex">
        {secondColumnMockReviews.map((item, index) => (
          <Review key={index} {...item} />
        ))}
      </ReviewsColumn>
    </Section>
  );
};

export default Reviews;
