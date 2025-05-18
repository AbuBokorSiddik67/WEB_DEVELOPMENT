// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const SingleBook = ({ singleBook }) => {
	console.log();
	// const data = use(bookPromise);
	// console.log(singleBook);
	const {bookId, bookName, category, image, rating} = singleBook;
	return (
		<Link to={`/bookDetails/${bookId}`}>
			<div className="card bg-base-100 w-96 border shadow-sm">
				<figure className="p-4 bg-slate-100 w-2/3 mx-auto m-5">
					<img className="h-[166px]" src={image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{bookName}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{category}</div>
						<div className="badge badge-outline">
							{rating}
							<FaStarHalfAlt />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SingleBook;

// author
// :
// "J.K. Rowling"
// bookId
// :
// 7
// bookName
// :
// "Harry Potter and the Sorcerer's Stone"
// category
// :
// "Fantasy"
// image
// :
// "https://i.ibb.co.com/989qMRW/42844155.jpg"
// publisher
// :
// "Bloomsbury"
// rating
// :
// 4.8
// review
// :
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// :
// (2) ['Magic', 'Young Adult']
// totalPages
// :
// 309
// yearOfPublishing
// :
// 1997
