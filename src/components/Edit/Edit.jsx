import { useState } from "react";
import { API } from "../../utils/config";
import { toast } from "react-toastify";

function Edit({ open, close, book }) {
  const [title, setTitle] = useState(book.title || "");
  const [cover, setCover] = useState(book.cover || "");
  const [pages, setPages] = useState(book.pages || "");
  const [publishedYear, setPublishedYear] = useState(
    book.published ? new Date(book.published).getFullYear() : ""
  );
  const [isbn, setIsbn] = useState(book.isbn || "");
  const [status, setStatus] = useState(book.status || 1);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const updatedBook = {
        title,
        cover,
        pages: Number(pages),
        published: publishedYear ? new Date(publishedYear, 0, 1).toISOString() : null,
        isbn,
        status,
      };

      await API.patch(`/books/${book._id}`, updatedBook);
      toast.success("Book updated successfully");
      close();
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update book");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-black text-xl"
          onClick={close}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl text-black mb-4">Edit Book</h2>


        <label htmlFor="status" className="text-sm text-black mb-1 block">
          Select Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(parseInt(e.target.value, 10))}
          className="text-black border border-gray-300 rounded-lg py-2 px-4 w-full mb-5"
        >
          <option value={1}>🔴 New</option>
          <option value={2}>🟡 Reading</option>
          <option value={3}>🟢 Finished</option>
        </select>

        <div className="flex justify-between gap-2">
          <button
            onClick={close}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-full"
            type="button"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
