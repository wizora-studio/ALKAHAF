import { redirect } from "next/navigation";

export default async function PhysicalClassesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}/online-classes`);
}
