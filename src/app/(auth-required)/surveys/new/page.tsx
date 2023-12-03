import ConfirmLeavingPage from "@/components/atoms/common/confirm-leaving-page";
import NewSurvey from "@/components/organisms/new-survey";

export default async function NewSurveyPage() {
  return (
    <div className="flex min-h-full flex-col items-center bg-sky-50 pt-10">
      <div className="w-2/3">
        <NewSurvey />
      </div>
      <ConfirmLeavingPage />
    </div>
  );
}
