# Ньюми — сайт (newmeit.ru)

Лендинг / сайт для аккредитации сервиса «Ньюми». SPA на **Vite + React + TanStack Router**, стили — **Tailwind**.

## Разработка

```bash
bun install      # зависимости
bun dev          # дев-сервер (localhost:5173)
bun run build    # прод-сборка в dist/
bun run preview  # предпросмотр собранного
bun run typecheck
```

Картинки/видео/PDF лежат в `public/` и подключаются через хелпер `src/utils/asset.ts`
(`asset('/images/x.png')`), который учитывает `base` — поэтому пути работают и в корне домена,
и на под-пути (`*.github.io/<repo>/`).

## Хостинг

Сайт собирается в статику и обслуживается **GitHub Pages** (за реверс-прокси для кастомного домена).

- Ветка **`main`** — исходники, ветка **`gh-pages`** — собранный сайт (его отдаёт Pages).
- `public/CNAME` = `newmeit.ru` — кастомный домен Pages (не удалять).
- Клиентские роуты (`/price`, `/documentation`, `/activity`) пре-рендерятся в shell-копии
  `index.html` плагином `github-pages-spa` в `vite.config.ts` → прямой заход даёт `200`.

## Деплой

Публикуется только ветка `gh-pages`:

```bash
bun run build
git worktree add --orphan -b _deploy /tmp/_deploy
cp -R dist/. /tmp/_deploy/
( cd /tmp/_deploy && git add -A && git commit -m "Deploy" && git push -f origin _deploy:gh-pages )
git worktree remove /tmp/_deploy --force && git branch -D _deploy
```

GitHub Pages пересобирается за ~1 мин.

## Замечания

- `.env` в репозиторий **не коммитится** (см. `.gitignore`).
- `_headers`/`_redirects` в `public/` — артефакты Cloudflare Pages, на текущем хостинге не используются.
