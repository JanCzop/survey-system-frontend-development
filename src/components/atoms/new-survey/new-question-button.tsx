import { PlusCircleIcon } from "@heroicons/react/24/outline";

const NewQuestionButton = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={clickHandler}
        type="button"
        className="flex h-10 items-center justify-center gap-7 border-none text-blue-500 transition hover:text-blue-600"
      >
        <PlusCircleIcon className="w-7" />{" "}
        <p className="">Dodaj nowe pytanie</p>
      </button>
    </div>
  );
};

export default NewQuestionButton;
