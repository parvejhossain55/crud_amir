import React from "react";
import "./App.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <ReadPage/>
        }
    ]
)

function App() {
    return <RouterProvider router={router} />;
}

// function App() {
//     return (
//         <BrowserRouter>
//             <AppNavbar></AppNavbar>
//             <Routes>
//                 <Route path="/" element={<ReadPage />} />
//                 <Route path="/create" element={<CreatePage />} />
//                 <Route path="/update/:id" element={<UpdatePage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

export default App;
