type TimestampChipProps = {
    date: string;
};

export default function TimestampChip({ date }: TimestampChipProps) {
    return <span className="timestamp-chip">As of {date}</span>
}