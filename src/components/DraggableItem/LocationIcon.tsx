export interface LocationIconProps {
  width?: number;
  height?: number;
}

export default function LocationIcon({
  width = 16,
  height = 16,
}: LocationIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" strokeWidth={1.5}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={5} r={3.5} />
        <path d="M 8,9 V 12" />
        <path d="M 3.5,14.5 H 12.5" />
      </g>
    </svg>
  );
}
