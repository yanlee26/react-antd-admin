export function IndexDisplay({
  val,
  txt,
  isWarning = false,
}: {
  val: string | number;
  txt: string;
  isWarning: boolean;
}) {
  return (
    <div
      style={{
        ...style,
        color: isWarning ? '#f00' : '',
      }}
    >
      {txt}: {val}%
    </div>
  );
}

export const style: React.CSSProperties = { padding: '8px 0' };
