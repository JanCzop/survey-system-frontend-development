const SurveyHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-4 w-full rounded-lg bg-white p-6 text-left shadow">
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SurveyHeader;
