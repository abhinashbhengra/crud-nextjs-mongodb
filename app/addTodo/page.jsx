export default function page() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Todo Title"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Todo Description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Todo
      </button>
    </form>
  );
}
