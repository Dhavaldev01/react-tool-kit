import { Link, useNavigate, useRoutes } from "react-router-dom";
import CommentList from "./pages/comments";
import ReceipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found-page";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hook";
import UseMemoExample from "./pages/hook/use-memo-example";
import UseCallbackExample from "./pages/hook/use-callback-example";
import ReactQuaryDemo from "./pages/react-quary-demo";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <ReceipeList/> },
        { path: "comments-list", element: <CommentList/> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage/> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },{
      path  : '/react-hook-form',
      element : <ReactHookFormExamplePage/>
    },
    {
      path : '/hooks',
      element : <Hooks/>
    },
    {
      path : '/callback',
      element : <UseCallbackExample/>
    },{
      path : '/memo',
      element : <UseMemoExample/>
    },
    {
      path : '/react-query-demo',
      element : <ReactQuaryDemo/>
    }
  ]);

  return element
}

function App() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3>React routing , Custom hooks</h3>
        {/* <div>
          <Link to="/home/recipe-list">
            Alternative way of navigating to the recipe Page
          </Link>
          <br />
          <Link to="/home/comments-list">
            Alternative way of navigating to the comments Page
          </Link>
        </div>
        <button
          onClick={() => navigate("/home/recipe-list")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Navigate to Recipe List Page
        </button>
        <button
          onClick={() => navigate("/home/comments-list")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Navigate to Comments List Page
        </button> */}
        {/* 
        <Routes>
          <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes> */}
        <CustomRoutes />
        {/* <UseMemoExample/> */}
        {/* <UseCallbackExample/> */}
        {/* <ReactQuaryDemo/> */}
      </div>
    </>
  );
}

export default App;
