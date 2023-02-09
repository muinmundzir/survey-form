
interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

function Button({text, onClick, disabled}: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className="rounded-3xl bg-purple-700 mt-2 py-2 text-white text-center shadow-sm hover:bg-purple-600">
      {text}
    </button>
  );
}

export default Button;
