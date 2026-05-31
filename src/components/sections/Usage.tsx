import Section from './Section';

const Usage = () => {
  return (
    <Section
      verticalSpacing="lg"
      className="md:pt-8"
      contentWrapperClassName="gap-8"
    >
      <h2 className="max-w-screen-sm text-center text-xl font-semibold md:max-w-max md:text-3xl">
        Ньюми помогает блогерам, экспертам и продюсерам в создании оригинальных
        идей и контента с помощью нейросетей
      </h2>
      <div className="mt-12 rounded-full bg-black/5 px-8 py-4">
        <p className="gradient-text text-lg font-semibold">
          И это только начало!
        </p>
      </div>
    </Section>
  );
};

export default Usage;
