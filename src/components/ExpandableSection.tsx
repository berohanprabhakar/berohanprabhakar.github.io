import { useState } from "react";

interface ExpandableSectionProps<T> {
  items: T[];
  initialCount: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  buttonText?: string;
}

function ExpandableSection<T>({
  items,
  initialCount,
  renderItem,
  buttonText = "Show more",
}: ExpandableSectionProps<T>) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialCount);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {visibleItems.map((item, index) =>
          renderItem(item, index)
        )}
      </div>

      {!showAll && items.length > initialCount && (
        <div className="pt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            {buttonText} →
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpandableSection;