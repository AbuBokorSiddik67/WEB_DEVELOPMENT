import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../Card/Card";

const Data = () => {
	const allData = useLoaderData();
	const [sata, setData] = useState(allData);
	return (
		<div className="w-[80%] mx-auto">
			{sata.map((realData, index) => (
				<Card key={index} realData={realData} sata={sata} setData={setData}></Card>
			))}
		</div>
	);
};

export default Data;
