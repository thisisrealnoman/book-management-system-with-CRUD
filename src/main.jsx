import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddBook from './components/AddBook.jsx';
import UpdateBook from './components/UpdateBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addBook",
    element: <AddBook></AddBook>,
  },
  {
    path: "updateBook",
    element: <UpdateBook></UpdateBook>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
