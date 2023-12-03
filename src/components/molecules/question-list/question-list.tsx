import QuestionItem from "./question-item";

const QuestionList = ({ questions }: { questions: Question[] }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {questions.map((question) => (
        <QuestionItem key={question.order} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
