import React from "react";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import SingleChoiceFormField from "@/components/atoms/form/fields/single-choice-form-field";
import MultiChoiceFormField from "@/components/atoms/form/fields/multi-choice-form-field";
import { QuestionType } from "@/types/questionType";

const formFieldsMap: Record<QuestionType, React.ElementType> = {
  [QuestionType.TEXT]: TextFormField,
  [QuestionType.SINGLE_CHOICE]: SingleChoiceFormField,
  [QuestionType.MULTI_CHOICE]: MultiChoiceFormField,
};

export const createQuestionComponent = (
  type: QuestionType,
  props?: {
    [key: string]: unknown;
  },
) => {
  return React.createElement(formFieldsMap[type], props);
};
