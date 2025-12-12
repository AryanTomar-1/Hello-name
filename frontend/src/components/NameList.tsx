import type { NameEntry } from "../types/Name";

interface Props {
  items: NameEntry[]; // array of names
}

export default function NameList({ items }: Props) {
  return (
    <section className="mt-6">
      <div className="border rounded-lg bg-white shadow-sm overflow-hidden h-[60vh] flex flex-col">
        <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
          <h2 className="text-lg font-semibold">List of Names</h2>
          <span className="text-sm text-gray-500">{items.length} total</span>
        </div>

        <div className="overflow-auto flex-1">
          <ul className="divide-y">
            {items.map((entry, index) => (
              <li key={index} className="py-3 px-4 flex items-center justify-between">
                <span className="text-lg text-left">{entry.name}</span>
                <span className="text-xs text-gray-400 text-right">
                  {`added at ${entry.createdAt.replace("T", " ").substring(0, 19)}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
