interface EmergencyBarProps {
  dict: { text: string };
}

export default function EmergencyBar({ dict }: EmergencyBarProps) {
  return (
    <div className="emergency-bar py-2 px-4 text-center text-sm font-medium">
      <span>{dict.text}</span>
    </div>
  );
}
