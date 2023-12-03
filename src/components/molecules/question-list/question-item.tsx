import { createQuestionComponent } from "./form-fields-map";

const QuestionItem = ({ question }: { question: Question }) => {
  const { text, details, choices, type, label } = question;

  return (
    <div className="w-full rounded-md bg-white p-5 shadow">
      <div className="mb-2">
        <h3>{text}</h3>
        {details && <p className="text-sm text-gray-400">{details}</p>}
      </div>
      <div className="w-full">
        {createQuestionComponent(type, {
          name: String(question.order),
          label: label,
          choices: choices,
        })}
      </div>
    </div>
  );
};

export default QuestionItem;
