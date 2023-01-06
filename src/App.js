import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="md:container md:mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
