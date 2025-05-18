import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Card = ({ realData, sata, setData }) => {
	const { _id, name, email, address, city } = realData;

	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				// DELETE DATA ON DATABASE START.
				fetch(`http://localhost:3000/data/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your item has been deleted.",
								icon: "success",
							});
                        }
                        // Remove item for state start.
						const card = sata.filter((d) => d._id !== _id);
                        setData(card);
                        // Remove item for state end.
					});
				// DELETE DATA ON DATABASE END.
			}
		});
	};

	return (
		<div>
			<div className="flex  border border-amber-500 mt-10 w-[350px] p-4">
				<div>
					<p className="">{name}</p>
					<p className="">{email}</p>
					<p className="">{address}</p>
					<p className="">{city}</p>
				</div>
				<div className="ml-10 flex flex-col">
					<button onClick={() => handleDelete(_id)}>X</button>
					<Link to={`/update/${_id}`}>
						<button>Edit</button>
					</Link>
					<button>Details</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
