import SurveysTable from "@/components/atoms/user-panel/surveys-table";

export default async function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-sky-100 p-10">
      {/* <UserHeader /> */}
      <SurveysTable />
    </div>
  );
}
