interface RadioInputProps {
    label: string;
    option: string;
}

function RadioInput({label, option}: RadioInputProps) {
  return (
    <div className="mb-1">
      <input
        className="mr-2 text-lg accent-purple-600"
        type="radio"
        name={`question-option-${option}`}
        id={option}
      />
      <label htmlFor={option} className="font-semibold text-purple-600">{label}</label>
    </div>
  );
}

export default RadioInput;
