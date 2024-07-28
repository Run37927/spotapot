import MapList from "@/components/MapList";
import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/db";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <MapList />
  );
}
