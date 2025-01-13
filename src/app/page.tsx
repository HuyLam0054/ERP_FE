import { RootHeader } from "@/components/layout/header";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <div>
        <RootHeader />
        <div className="text-[100px]">{session?.user?.name}</div>
      </div>
    </>
  );
}
