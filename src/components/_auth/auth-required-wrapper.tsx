"use client";

import { useContext, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "./user-context";

const AuthRequiredWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useContext(UserContext);
  const router = useRouter();

  useLayoutEffect(() => {
    console.log("auth");
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return <>{isAuthenticated && children}</>;
};

export default AuthRequiredWrapper;
