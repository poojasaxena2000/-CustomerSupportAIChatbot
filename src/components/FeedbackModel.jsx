export default function FeedbackModel({ isClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    isClose();
  };

  return (
    <div className="fixed inset-0 grid place-items-center">
      <div onClick={isClose} className="absolute inset-0 bg-black/60" />
      <div className="relative bg-white w-full max-w-xs p-6 rounded">
        <h2 className="mb-1">Provide Additional Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 px-4"
          />
          <button type="submit" onClick={isClose} className="p-2 px-7 rounded bg-[#d7c7f4] cursor-pointer">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
