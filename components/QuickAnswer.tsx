interface QuickAnswerProps {
  answer: string;
  label?: string;
}

export default function QuickAnswer({ answer, label = "Quick Answer:" }: QuickAnswerProps) {
  return (
    <div className="quick-answer" role="note" aria-label="Quick Answer">
      <strong>{label} </strong>
      <span>{answer}</span>
    </div>
  );
}
