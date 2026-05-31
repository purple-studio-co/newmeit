import { asset } from '../utils/asset';
import Feature from './sections/Feature';
import Section from './sections/Section';

const Features = () => {
  return (
    <Section
      verticalSpacing="lg"
      className="relative"
      classNameReviews="md:flex-row gap-2 horizontal-scroll relative overflow-y-hidden webkit-scrollbar"
    >
      <Feature
        title="Скорость x10"
        description="С Ньюми скорость создания контента для ваших социальных сетей вырастает в 10 раз."
        animationDelay={0}
      >
        <img
          src={asset('/images/clock3D.png')}
          className="absolute right-[-55px] top-[79px] h-[185px] w-[185px] md:left-[-46px] md:right-auto"
          alt="3D Sand clock"
        />
        <img
          src={asset('/images/circle3D.png')}
          className="absolute right-[-74px] top-[111px] hidden h-[148px] w-[148px] md:block"
          alt="3D Circle"
        />
      </Feature>
      <Feature
        title="Гипер­персонализация"
        description="При создании контента Ньюми учитывает информацию о вас и ваших предпочтениях."
        animationDelay={0.2}
      >
        <img
          src={asset('/images/circle3D.png')}
          className="absolute left-[-82px] top-[111px] hidden h-[148px] w-[148px] md:block"
          alt="3D Circle"
        />
        <img
          src={asset('/images/stars3D.png')}
          className="absolute -left-12 top-24 h-[225px] w-[225px] rotate-[42deg] md:-right-10 md:left-auto"
          alt="3D Stars"
        />
      </Feature>
      <Feature
        title="Обучаемый Искусственный Интеллект"
        description="С каждым днем Ньюми становится умнее, благодаря вашей обратной связи."
        animationDelay={0.4}
      >
        <img
          src={asset('/images/stars3D.png')}
          className="absolute -left-48 top-24 hidden h-[225px] w-[225px] rotate-[42deg] md:block"
          alt="3D Stars"
        />
        <img
          src={asset('/images/circledStar3D.png')}
          className="absolute right-[-50px] top-[111px] h-[174px] w-[174px]"
          alt="3D Circled star"
        />
      </Feature>
    </Section>
  );
};

export default Features;
