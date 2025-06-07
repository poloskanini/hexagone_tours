import { fr as t } from '@/lib/locales/fr';

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{t.home.title}</h1>
      <p>{t.home.intro}</p>
    </main>
  );
}
