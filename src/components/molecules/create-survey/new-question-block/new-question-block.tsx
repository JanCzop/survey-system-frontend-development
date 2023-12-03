"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import NewQuestionBlockEditing from "./new-question-block-editing";
import NewQuestionBlockSaved from "./new-question-block-saved";
import EditButton from "@/components/atoms/new-survey/edit-button";
import DeleteButton from "@/components/atoms/new-survey/delete-button";
import SaveButton from "@/components/atoms/new-survey/save-button";
import { QuestionType } from "@/types/questionType";

const NewQuestionBlock = ({
  id,
  type,
  deleteHandler,
}: {
  id: string;
  type: QuestionType;
  deleteHandler: (id: number) => void;
}) => {
  const [isEditing, setIsEditing] = useState(true);
  const { register, unregister, trigger, formState, setValue } =
    useFormContext();
  const [actualType, setActualType] = useState<QuestionType>(type);

  // needed for formState to update
  // eslint-disable-next-line
  const { errors } = formState;

  useEffect(() => {
    register(`questions.${id}.type`, { value: type });
  }, []);

  function onDelete() {
    unregister(`questions.${id}`);
    deleteHandler(parseInt(id));
  }

  function onSave() {
    trigger(`questions.${id}`)
      .then((result) => {
        if (result) {
          setIsEditing(false);
        }
      })
      .catch(() => {});
  }

  const hasOptions = (type: QuestionType) =>
    type === QuestionType.SINGLE_CHOICE || type === QuestionType.MULTI_CHOICE;

  function onTypeChange(newType: QuestionType) {
    if (!hasOptions(newType)) unregister(`questions.${id}.choices`);

    setValue(`questions.${id}.type`, newType);
    setActualType(newType);
  }

  return (
    <div className="new-question-block group flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
      <div className="question w-5/6">
        {isEditing ? (
          <NewQuestionBlockEditing
            id={id}
            type={actualType}
            onTypeChange={onTypeChange}
          />
        ) : (
          <NewQuestionBlockSaved id={id} type={actualType} />
        )}
      </div>
      <div
        className={`buttons flex w-1/6 justify-end gap-2 ${
          !isEditing && "opacity-0 transition-opacity group-hover:opacity-100"
        }`}
      >
        {!isEditing ? (
          <EditButton onClick={() => setIsEditing(!isEditing)} />
        ) : (
          <SaveButton onClick={onSave} />
        )}
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default NewQuestionBlock;
