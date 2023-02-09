interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-3xl mt-2 py-2 cursor-pointer ${
        !disabled
          ? "bg-purple-700 hover:bg-purple-600"
          : "bg-slate-300 hover:bg-slate-400"
      } font-semibold text-white text-center shadow-sm `}
    >
      {text}
    </button>
  );
}

export default Button;
