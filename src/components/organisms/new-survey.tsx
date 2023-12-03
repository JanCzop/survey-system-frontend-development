import NewSurveyForm from "../atoms/new-survey/new-survey-form";
import NewQuestionList from "../molecules/create-survey/new-question-list";
import NewSurveyHeader from "../molecules/create-survey/new-survey-header";
import NewSurveySubmit from "../molecules/create-survey/new-survey-submit";

const NewSurvey = () => {
  return (
    <NewSurveyForm>
      <div className="flex flex-col gap-7">
        <NewSurveyHeader />
        <div className="mb-17">
          <NewQuestionList />
        </div>
      </div>
      <NewSurveySubmit />
    </NewSurveyForm>
  );
};

export default NewSurvey;
