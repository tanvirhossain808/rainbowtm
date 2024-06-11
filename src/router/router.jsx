import { createBrowserRouter } from "react-router-dom";
import HomeDemo from "../pages/HomeDemo/HomeDemo";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeDemo />
        }
    ]
)

export default router