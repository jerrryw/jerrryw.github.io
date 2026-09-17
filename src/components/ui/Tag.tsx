interface TagListProps {
  items: readonly string[];
  /** Accessible name, e.g. "Technologies used". */
  label: string;
}

export function TagList({ items, label }: TagListProps) {
  if (items.length === 0) return null;

  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
