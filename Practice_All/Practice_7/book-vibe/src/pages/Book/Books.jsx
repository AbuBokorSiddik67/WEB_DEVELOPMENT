import React, { Suspense } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Books = ({ data }) => {
	// const [AllBooks, SetAllBooks] = useState([]);
	// useEffect(() => {
	// 	fetch("booksData.json")
	// 		.then((res) => res.json())
	// 		.then((data) => SetAllBooks(data));
	// }, []);
	// const bookPromise = fetch('booksData.json').then(res=>res.json());

	return (
		<div>
			<h1 className="text-3xl text-center p-6 mx-auto">Books</h1>
			<Suspense fallback={<span>Loading..........</span>}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{data.map((singleBook) => (
						<SingleBook
							key={singleBook.bookId}
							singleBook={singleBook}
						></SingleBook>
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default Books;
