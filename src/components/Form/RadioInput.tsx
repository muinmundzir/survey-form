interface RadioInputProps {
    id: number;
    label: string;
    option: string;
    selectedOption: string | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioInput({id, label, option, selectedOption, onChange}: RadioInputProps) {
  return (
    <div className="mb-1">
      <input
        className="mr-2 text-lg accent-purple-600"
        type="radio"
        name={`question-option-${option}`}
        id={id.toString()}
        onChange={onChange}
        value={label}
        checked={selectedOption === label}
      />
      <label htmlFor={id.toString()} className="font-semibold text-purple-600">{label}</label>
    </div>
  );
}

export default RadioInput;
