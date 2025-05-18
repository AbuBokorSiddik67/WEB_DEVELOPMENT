import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import SingleBook from "../SingleBook/SingleBook";
import BookDetails from "../BookDetails/BookDetails";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
	const data = useLoaderData();
	console.log(readList);

	useEffect(() => {
		const LocalData = getStoreBook();
		const convertedLocalData = LocalData.map((id) => parseInt(id));
		const Book = data.filter((book) =>
			convertedLocalData.includes(book.bookId)
		);
		setReadList(Book);
	}, []);

	return (
		<div>
			<Tabs>
				<TabList>
					<Tab>Read list</Tab>
					<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
                    <h2>My Read List: {readList.length}</h2>
                    {
                        readList.map(boo => <SingleBook key={boo.bookId} singleBook={boo}></SingleBook>)
                    }
				</TabPanel>
				<TabPanel>
					<h2>My Wish List</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;
