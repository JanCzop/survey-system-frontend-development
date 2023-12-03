"use client";

import { useFormContext } from "react-hook-form";
import { createQuestionComponent } from "../../question-list/form-fields-map";
import { FieldTypeNameMap, type QuestionType } from "@/types/questionType";

const NewQuestionBlockSaved = ({
  id,
  type,
}: {
  id: string;
  type: QuestionType;
}) => {
  const { getValues } = useFormContext();

  function getValue(name: string) {
    return getValues(`questions.${id}.${name}`) as string;
  }

  return (
    <>
      <div className="mb-2">
        <h2 className="text-lg">
          <span className="font-bold">{FieldTypeNameMap[type]} </span>
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="mb-2">
          <h3>{getValue("text")}</h3>
          {getValue("details") !== "" && (
            <p className="text-sm text-gray-400">{getValue("details")}</p>
          )}
        </div>
        <div className="w-full">
          {createQuestionComponent(type, {
            name: String(id),
            label: getValue("label"),
            choices: getValue("choices") ?? [],
            disabled: true,
          })}
        </div>
      </div>
    </>
  );
};

export default NewQuestionBlockSaved;
