import { useEffect, useState } from "react";
import NameForm from "./pages/NameForm";
import NameList from "./components/NameList";
import { getNames } from "./api/api";
import type { NameEntry } from "./types/Name";

export default function App() {
  const [names, setNames] = useState<NameEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNames = async () => {
    try {
      const res = await getNames();
      console.log("Fetched names:", res.data);
      setNames(res.data.names || []);
    } catch (err) {
      console.error("Error fetching names:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    // Full screen layout: header+form at the top (not scrollable), list box fills remaining space and is scrollable
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="flex-shrink-0 py-6 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-600">Hello Names</h1>
      </header>

      <div className="flex-shrink-0 px-4">
        <div className="max-w-xl mx-auto">
          <NameForm refreshNames={fetchNames} />
        </div>
      </div>

      <main className="flex-1 px-4">
        <div className="max-w-xl mx-auto h-full">
          {loading ? (
            <p className="mt-6 text-center">Loading...</p>
          ) : (
            <NameList items={names} />
          )}
        </div>
      </main>
    </div>
  );
}
