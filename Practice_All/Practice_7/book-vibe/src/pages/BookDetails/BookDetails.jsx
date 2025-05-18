import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreBD } from "../../utility/addToDB";

const BookDetails = () => {
	const { id } = useParams();
	const bookId = parseInt(id);
	const data = useLoaderData();

	const SingleData = data.find((book) => book.bookId === bookId);
	const { bookName, image } = SingleData;

	const handleMarkAsRead = (id) => {
		addToStoreBD(id)
	}

	return (
		<div className="border-1 flex flex-col justify-center items-center p-10">
			<img className="w-48" src={image} alt="" />
			<h3>{bookName}</h3>
			<div>
				<button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary m-2">Read</button>
				<button className="btn bg-pink-600 m-2">WishList</button>
			</div>
		</div>
	);
};

export default BookDetails;
