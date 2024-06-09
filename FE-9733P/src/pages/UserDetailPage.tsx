import React from "react";
import { Link, LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const userLoader = async ({ params }:LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await response.json();
  return user;
};

function UserDetailPage() {
  const user = useLoaderData() as User;
  const { userId } = useParams();

  return (
    <>
      <h1>{user.name}</h1>
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
      <nav>
        <ul>
          <li>
            <Link to={`/users/${userId}/posts`}>Posts</Link>
          </li>
          <li>
            <Link to={`/users/${userId}/todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`/users/${userId}/albums`}>Albums</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default UserDetailPage;
