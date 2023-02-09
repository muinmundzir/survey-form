interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-3xl mt-2 py-2 cursor-pointer bg-purple-700 hover:bg-purple-600
       font-semibold text-white text-center shadow-sm `}
    >
      {text}
    </button>
  );
}

export default Button;
