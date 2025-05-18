import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Data from "../components/Data/Data";
import AddData from "../components/AddData/AddData";
import UpdateData from "../components/UpdateData/UpdateData";

export const router = createBrowserRouter([
	{
		path: "/",
        Component: MainLayouts,
        children: [
            {
                index: true,
                hydrateFallbackElement: <><h1>Amr soner bangla ami tomai valo basi!!</h1></>,
                loader: () => fetch('http://localhost:3000/data').then(res => res.json()),
                Component: Data
            },
            {
                path: '/add',
                Component: AddData
            },
            {
                path: '/update/:id',
                hydrateFallbackElement: <><h1>amr soner bangla ami tomai valo basi</h1></>,
                loader: ({ params }) => fetch(`http://localhost:3000/data/${params.id}`),
                Component: UpdateData
            },
        ]
	},
]);
