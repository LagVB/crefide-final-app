import { getServerUser } from "@/utils/getServerUser/user";
import { redirect } from "next/navigation";

export default async function Home() {
  const { data, error } = await getServerUser();
  if (error || !data?.user) {
    redirect('/login')
  }
  redirect('/home');
}
