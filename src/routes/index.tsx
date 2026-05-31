import { createFileRoute } from '@tanstack/react-router';
import Features from '../components/Features';
import Header from '../components/Header';
import Egg from '../components/sections/Egg';
import Possibilities from '../components/sections/Possibilities';
import Reviews from '../components/sections/Reviews/Reviews';
import Usage from '../components/sections/Usage';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex max-w-none flex-col">
      <Header buttonType="to-application" />
      <Egg />
      <Usage />
      <Reviews
        title="Что говорят о Ньюми пользователи?"
        subtitle="Первыми пользователями Ньюми стали 50 первооткрывателей, которые помогли нам усилить результаты и функционал искусственного интеллекта."
      />
      <Features />
      <Possibilities />
    </div>
  );
}
