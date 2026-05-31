import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/price')({
  component: Price,
});

type Plan = {
  period: string;
  badge?: string;
  price: string;
  priceNote?: string;
  perMonth?: string;
  highlighted?: boolean;
  features: { label: string; value: string | null }[];
};

const plans: Plan[] = [
  {
    period: '3 дня',
    price: '1 ₽',
    priceNote: 'за одного Пользователя',
    perMonth: 'далее автопродление за 2 990 ₽***',
    features: [
      { label: 'Лимит запросов', value: '1 000 запросов* в месяц**' },
      { label: 'Порядок оплаты', value: '100% в момент оформления' },
      { label: 'После автопродления', value: null },
      { label: 'Дополнительные Профили', value: null },
      { label: 'Рассрочка****', value: null },
    ],
  },
  {
    period: '1 месяц',
    badge: 'Популярный',
    price: '5 990 ₽',
    priceNote: 'за одного Пользователя',
    perMonth: 'автопродление 5 990 ₽/мес',
    highlighted: true,
    features: [
      { label: 'Лимит запросов', value: '1 000 запросов* в месяц**' },
      { label: 'Порядок оплаты', value: '100% в момент оформления' },
      { label: 'После автопродления', value: '5 990 ₽ за Пользователя' },
      {
        label: 'Дополнительные Профили',
        value: 'Покупка Профилей в рамках тарифа до 6 месяцев',
      },
      { label: 'Рассрочка****', value: null },
    ],
  },
  {
    period: '6 месяцев',
    badge: 'Выгодно',
    price: '29 990 ₽',
    priceNote: 'за одного Пользователя',
    perMonth: '≈ 4 998 ₽/мес',
    features: [
      { label: 'Лимит запросов', value: '1 000 запросов* в месяц**' },
      { label: 'Порядок оплаты', value: '100% в момент оформления' },
      { label: 'После автопродления', value: null },
      {
        label: 'Дополнительные Профили',
        value: 'Безлимитное создание Профилей за 19 990 ₽',
      },
      { label: 'Рассрочка****', value: '34 499 ₽ за Пользователя' },
    ],
  },
];

function Price() {
  return (
    <div className="flex w-full max-w-none flex-col pt-12">
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Стоимость
        </h1>
        <p className="max-w-2xl text-base text-gray-500 md:text-lg">
          Право использования программного обеспечения «Сервис по генерации
          контента для социальных сетей» предоставляется на условиях
          лицензионного договора-оферты. Конкретный размер вознаграждения за
          предоставление права использования программного обеспечения
          определяется в соответствии с Приложением №1 к оферте.
        </p>
        <p className="max-w-2xl text-base text-gray-500 md:text-lg">
          Полный текст лицензионного договора-оферты:{' '}
          <a
            href="https://billing.newme.io/static/offer-out"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            https://billing.newme.io/static/offer-out
          </a>
        </p>
        <p className="max-w-2xl text-base text-gray-500 md:text-lg">
          Приложение №1 является неотъемлемой частью оферты. Заключением
          договора является оплата подписки.
        </p>
      </div>

      <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
        Приложение №1 — Доступные подписки
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {plans.map((plan) => (
          <PlanCard key={plan.period} plan={plan} />
        ))}
      </div>

      <div className="mt-10 grid gap-3 rounded-2xl bg-black/5 p-6 text-sm text-gray-600 md:text-base">
        <p>
          <span className="font-semibold text-gray-900">* Запрос</span> —
          каждое обращение Пользователя к Сервису для генерации контента или
          персонализированной идеи.
        </p>
        <p>
          <span className="font-semibold text-gray-900">** Месяц</span> —
          период с даты предоставления доступа до соответствующего числа
          следующего календарного месяца. Лимит — 600 запросов в месяц.
          Неиспользованные запросы не переносятся.
        </p>
        <p>
          <span className="font-semibold text-gray-900">***</span>{' '}
          Автоматическое продление при наличии отметки на платёжной странице.
        </p>
        <p>
          <span className="font-semibold text-gray-900">****</span> Рассрочка
          предоставляется кредитными организациями по их условиям.
        </p>
      </div>

      <div className="mt-10 grid gap-3 text-sm text-gray-600 md:text-base">
        <p>
          <span className="font-semibold text-gray-900">Исполнитель:</span>{' '}
          Общество с ограниченной ответственностью «Нью Ми» (ООО «Нью Ми»), ИНН
          9706045828, ОГРН 1247700392796.
        </p>
        <p>
          Стоимость указана в российских рублях. НДС не облагается (пп. 26 п. 2
          ст. 149 НК РФ).
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <p className="text-lg font-bold text-gray-900">Контакты</p>
        <p className="text-base text-gray-600">
          <span className="font-semibold">Email:</span> support@newme.io
        </p>
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={
        'relative flex flex-col rounded-3xl p-6 md:p-7 ' +
        (plan.highlighted
          ? 'bg-blue-500 text-white shadow-xl md:scale-[1.02]'
          : 'bg-black/5 text-gray-900')
      }
    >
      {plan.badge && (
        <span
          className={
            'absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ' +
            (plan.highlighted
              ? 'bg-white text-blue-500'
              : 'bg-blue-500 text-white')
          }
        >
          {plan.badge}
        </span>
      )}

      <p
        className={
          'text-sm font-semibold uppercase tracking-wide ' +
          (plan.highlighted ? 'text-white/80' : 'text-gray-500')
        }
      >
        {plan.period}
      </p>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold leading-none md:text-5xl">
          {plan.price}
        </span>
      </div>
      {plan.priceNote && (
        <p
          className={
            'mt-1 text-sm ' +
            (plan.highlighted ? 'text-white/80' : 'text-gray-500')
          }
        >
          {plan.priceNote}
        </p>
      )}
      {plan.perMonth && (
        <p
          className={
            'mt-1 text-sm font-medium ' +
            (plan.highlighted ? 'text-white' : 'text-gray-700')
          }
        >
          {plan.perMonth}
        </p>
      )}

      <div
        className={
          'my-5 h-px ' + (plan.highlighted ? 'bg-white/20' : 'bg-black/10')
        }
      />

      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-start gap-2 text-sm">
            <span
              className={
                'mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ' +
                (f.value
                  ? plan.highlighted
                    ? 'bg-white text-blue-500'
                    : 'bg-blue-500 text-white'
                  : plan.highlighted
                    ? 'bg-white/20 text-white/60'
                    : 'bg-black/10 text-gray-400')
              }
              aria-hidden
            >
              {f.value ? '✓' : '—'}
            </span>
            <span className="flex flex-col">
              <span
                className={
                  'font-semibold ' +
                  (plan.highlighted ? 'text-white' : 'text-gray-900')
                }
              >
                {f.label}
              </span>
              <span
                className={
                  plan.highlighted ? 'text-white/80' : 'text-gray-600'
                }
              >
                {f.value ?? 'недоступно'}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
