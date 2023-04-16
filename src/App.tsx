import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const setBooksItem = async () => {
    const initArray: any = [];
    axios
      .get("api/books", {
        baseURL: "https://serene-agnesi-uro59qyfd.iran.liara.run/",
      })
      .then((response: any) => {
        setBooks(response?.data);
        console.log(response?.data);
      })
      .catch((error: any) => {
        console.log("errors =>", error);
      });
  };
  useEffect(() => {
    setBooksItem();
  }, []);

  return (
    <div className="flex bg-slate-900 p-10">
      <div className="w-full h-max grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {books
          ? books?.map((bItem: any) => (
              <div
                key={bItem?.id}
                className="bg-white rounded-2xl p-4 flex flex-col w-full justify-between"
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-open-book-with-flowers-bloom-illustration-png-image_7264020.png"
                  alt="book"
                  className="w-full"
                />
                <span className="text-center font-bold text-base text-black">
                  {bItem?.title}
                </span>
                <div className="flex flex-row justify-between mt-4">
                  <span className="text-center font-medium text-base text-gray-500">
                    Author:
                  </span>
                  <span className="text-center font-medium text-base text-gray-500">
                    {bItem?.author}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between mt-4 gap-3">
                  <button className="bg-red-100 text-red-700 w-full p-2 rounded-lg">
                    Remove
                  </button>
                  <button className="bg-green-100 text-green-700 w-full p-2 rounded-lg">
                    Add
                  </button>
                </div>
              </div>
            ))
          : []}
      </div>
    </div>
  );
}

export default App;
