import {
  Link,
  Outlet,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showFooter = pathname !== '/activity';

  return (
    <div className="mx-auto max-w-full overflow-x-hidden md:max-w-[1100px]">
      <header className="rounded-b-xl bg-blue-500 py-4 text-white">
        <nav className="flex justify-center space-x-4 px-5 text-xs md:gap-12 md:text-base">
          <Link to="/">О проекте</Link>
          <Link to="/activity">Деятельность</Link>
          <Link to="/documentation">Документация</Link>
          <Link to="/price">Стоимость</Link>
        </nav>
      </header>
      <div className="px-5 pb-12 md:px-12 2xl:px-0">
        <Outlet />
      </div>
      {showFooter && (
        <footer className="mt-8 border-t border-black/10 px-5 py-6 text-sm text-gray-500 md:px-12 2xl:px-0">
          <p>© 2026</p>
          <p>ООО «Нью Ми»</p>
          <p>ИНН 9706045828</p>
          <p>ОГРН 1247700392796</p>
        </footer>
      )}
    </div>
  );
}
