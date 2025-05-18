import React from "react";
import Swal from "sweetalert2";

const AddData = () => {
	const handleAddData = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newData = Object.fromEntries(formData.entries());

		// SEND DATA ON DB START..
		// POST DATA START.
		fetch("http://localhost:3000/data", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire("Data Added Successfully !!!");
				}
			});
		// POST DATA END.
		// SEND DATA ON DB END..
	};

	return (
		<section className="px-6 pt-20 pb-5 bg-gray-100 text-gray-900">
			<form
				onSubmit={handleAddData}
				noValidate=""
				action=""
				className="container flex flex-col mx-auto space-y-12"
			>
				<h1 className="text-2xl text-center font-bold">Add Your Information</h1>
				<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium">Personal Inormation</p>
						<p className="text-xs">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
							fuga autem eum!
						</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="firstname" className="text-sm">
								First name
							</label>
							<input
								id="firstname"
								name="name"
								type="text"
								placeholder="name"
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="email" className="text-sm">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="Email"
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="address" className="text-sm">
								Address
							</label>
							<input
								id="address"
								name="address"
								type="text"
								placeholder=""
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="city" className="text-sm">
								City
							</label>
							<input
								id="city"
								name="city"
								type="text"
								placeholder=""
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="state" className="text-sm">
								State / Province
							</label>
							<input
								id="state"
								name="state"
								type="text"
								placeholder=""
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="zip" className="text-sm">
								ZIP / Postal
							</label>
							<input
								id="zip"
								name="zip"
								type="text"
								placeholder=""
								className="w-full border rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
							/>
						</div>
					</div>
				</fieldset>
				<div className="flex justify-center mt-10 mb-5">
					<button type="submit" className="bg-blue-500 px-6 py-2 rounded-2xl">
						Add Information
					</button>
				</div>
			</form>
		</section>
	);
};

export default AddData;
