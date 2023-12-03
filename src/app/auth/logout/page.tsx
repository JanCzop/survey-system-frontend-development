// okropność ale trudno

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Loading from "@/components/atoms/common/loading";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("username");
    Cookies.set("isAuthenticated", "false");
    router.push("/");
  }, []);

  return <Loading />;
}
