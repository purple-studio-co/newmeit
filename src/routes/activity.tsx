import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/activity')({
  component: Activity,
});

function Activity() {
  return (
    <div className="prose max-w-none pt-12">
      <p className="text-gray-900 mb-2">
        <span className="font-bold">
          Основной вид экономической деятельности по ОКВЭД:
        </span>{' '}
        63.11 Деятельность по обработке данных, предоставление услуг по
        размещению информации и связанная с этим деятельность.
      </p>

      <p className="text-lg font-semibold text-gray-900 mb-2">
        ООО «Нью Ми» (ИНН 9706045828) осуществляет следующие виды деятельности
        в области информационных технологий:
      </p>

      <ul className="list-disc text-gray-500">
        <li>разработка собственного программного обеспечения;</li>
        <li>
          реализация собственного программного обеспечения путем предоставления
          права использования собственного программного обеспечения;
        </li>
        <li>
          оказание услуг по технической поддержке собственного программного
          обеспечения.
        </li>
      </ul>

      <p className="text-gray-900 mb-2">
        <span className="font-bold">Собственное программное обеспечение:</span>{' '}
        программное обеспечение «Сервис по генерации контента для социальных
        сетей», включено в Единый реестр российских программ для электронных
        вычислительных машин и баз данных. Реестровая запись №24006 от
        06.09.2024. Ссылка на запись в реестре:{' '}
        <a
          href="https://reestr.digital.gov.ru/reestr/2643051/?sphrase_id=19694531"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          https://reestr.digital.gov.ru/reestr/2643051/?sphrase_id=19694531
        </a>
      </p>

      <p className="text-gray-900 mb-2">
        Право использования программного обеспечения предоставляется на
        основании лицензионного договора-оферты:{' '}
        <a
          href="https://billing.newme.io/static/offer-out"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          https://billing.newme.io/static/offer-out
        </a>
      </p>

      <p className="prose-2xl">Технологический стек</p>

      <p>
        <span className="font-bold">Фронтенд:</span>&nbsp;
        <span>TypeScript, React, CSS, HTML, JavaScript, Vite, Docker</span>
      </p>

      <p>
        <span className="font-bold">Бэкенд:</span>&nbsp;
        <span>Ruby On Rails, RSpec, PostgreSQL, Docker</span>
      </p>

      <p className="lg:prose-2xl">Юридическая информация</p>

      <p className="leading-relaxed text-gray-700">
        - Общество с ограниченной ответственностью «Нью Ми» (ООО «Нью Ми»){' '}
        <br />
        - ИНН: 9706045828 <br />
        - ОГРН: 1247700392796 <br />
        - Юридический адрес: 119180, г. Москва, вн.тер.г. Муниципальный округ
        - Якиманка, наб Якиманская, д. 2, к. 1, помещ. 1/1
      </p>

      <p>
        <span className="font-bold">Адрес электронной почты: </span>
        support@newme.io
      </p>
    </div>
  );
}
