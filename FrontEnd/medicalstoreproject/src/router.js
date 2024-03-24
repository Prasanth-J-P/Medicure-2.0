import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import ListMedicine from "./components/blog/ListMedicine";
import AddMedicine from "./components/blog/AddMedicine";
import EditMedicine from "./components/blog/EditMedicine";
import ViewMedicine from "./components/blog/ViewMedicine";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Contactus from "./components/Contactus";
const router = createBrowserRouter([
    { path: 'aboutus', element: <Aboutus /> },
    { path: 'list', element: <ListMedicine /> },
    { path: 'addmed', element: <AddMedicine /> },
    { path: 'listmed/:postId/editmed', element: <EditMedicine /> },
    { path: 'listmed/:postId/viewmed', element: <ViewMedicine /> },
    { path: 'login', element: <Login /> },
    { path: '', element: <Signup /> },
    { path: 'contactus', element: <Contactus /> },
]);

export default router;