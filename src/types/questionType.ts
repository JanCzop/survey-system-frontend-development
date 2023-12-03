export enum QuestionType {
  SINGLE_CHOICE = 1,
  MULTI_CHOICE,
  NUMBER,
  TEXT,
  DATE,
  DATE_RANGE,
}

export const FieldTypeNameMap: Record<QuestionType, string> = {
  [QuestionType.SINGLE_CHOICE]: "Pole jednokrotnego wyboru",
  [QuestionType.MULTI_CHOICE]: "Pole wielokrotnego wyboru",
  [QuestionType.NUMBER]: "Pole numeryczne",
  [QuestionType.TEXT]: "Pole tekstowe",
  [QuestionType.DATE]: "Pole daty",
  [QuestionType.DATE_RANGE]: "Pole zakresu dat",
};
