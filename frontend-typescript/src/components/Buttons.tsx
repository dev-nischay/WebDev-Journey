type ButtonProps = {
  backgroundColor: string;
  text: string;
};

export default function Button({ backgroundColor, text }: ButtonProps) {
  return (
    <div className={`bg-blue-600 px-4 py-2 rounded-lg ${backgroundColor} `}>
      {text}
    </div>
  );
}
