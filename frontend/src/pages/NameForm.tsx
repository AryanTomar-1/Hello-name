import { useState } from "react";
import { addName, cleanNames } from "../api/api";
import { Toaster, toast } from "react-hot-toast";

interface Props {
  refreshNames: () => void;
}

export default function NameForm({ refreshNames }: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Name cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await addName(name);
      toast.success("Name Added!")
      setName("");
      refreshNames();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to add name";
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClean = async () => {
    try {
      setLoading(true);
      setError("");
      await cleanNames();
      toast.success("All names cleared!");
      refreshNames();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to clean names";
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <input
        type="text"
        placeholder="Enter name..."
        className="border rounded p-2 w-64 text-center"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Adding..." : "Submit"}
        </button>
        <button
          onClick={handleClean}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Cleaning..." : "Clean"}
        </button>
      </div>
      <Toaster />
    </div>
  );
}
