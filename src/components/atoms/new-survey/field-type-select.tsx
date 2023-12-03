import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { FieldTypeNameMap, type QuestionType } from "@/types/questionType";

const FieldTypeSelect = ({
  onChange,
  value,
  id,
}: {
  onChange: (event: SelectChangeEvent) => void;
  value: QuestionType;
  id: string;
}) => {
  return (
    <FormControl>
      <InputLabel id={`${id}-field-type-select-label`}>Typ pola</InputLabel>
      <Select
        labelId={`${id}-field-type-select-label`}
        label="Typ pola"
        value={String(value)}
        onChange={onChange}
        sx={{ width: "300px" }}
      >
        {Object.keys(FieldTypeNameMap).map((key) => (
          <MenuItem key={key} value={key}>
            {FieldTypeNameMap[parseInt(key) as QuestionType]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FieldTypeSelect;
