import { createFileRoute } from '@tanstack/react-router';
import { asset } from '../utils/asset';

export const Route = createFileRoute('/documentation')({
  component: Documentation,
});

function Documentation() {
  return (
    <div className="prose flex max-w-none flex-col pt-12 lg:prose-xl">
      <p>
        Фундаментальной целью программного обеспечения «Сервис по генерации
        контента для социальных сетей» является обеспечение возможности
        генерации контента для различных площадок, в том числе социальных сетей.
        Для генерации контента используется персонализация в виде профиля
        пользователя и его продуктов.
      </p>
      <p className="text-lg font-bold">
        Общая информация о программном обеспечении:
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        <span className="font-bold">Программное обеспечение: </span>программное
        обеспечение «Сервис по генерации контента для социальных сетей»
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        <span className="font-bold">
          Правообладатель программного обеспечения:
        </span>{' '}
        ООО «Нью Ми» (ИНН: 9706045828, ОГРН: 1247700392796).
      </p>
      <p>
        Программное обеспечение распространяется в виде интернет-сервиса,
        специальные действия по установке программного обеспечения на стороне
        пользователя не требуются
      </p>

      <p>
        <span className="font-bold">Функциональные характеристики: </span>
        <a href={asset('/pdf/func.pdf')} className="text-blue-400">
          Описание функциональных характеристик
        </a>
      </p>

      <p>
        <span className="font-bold">Руководство пользователя: </span>
        <a href={asset('/pdf/manual.pdf')} className="text-blue-400">
          Руководство пользователя
        </a>
      </p>

      <p>
        <span className="font-bold">
          Лицензионный договор-оферта о предоставлении права использования
          сервиса:{' '}
        </span>
        <a
          href="https://billing.newme.io/static/offer-out"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          https://billing.newme.io/static/offer-out
        </a>
      </p>
    </div>
  );
}
