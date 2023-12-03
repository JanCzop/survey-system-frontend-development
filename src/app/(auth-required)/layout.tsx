import AuthRequiredWrapper from "@/components/_auth/auth-required-wrapper";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthRequiredWrapper>{children}</AuthRequiredWrapper>;
}
