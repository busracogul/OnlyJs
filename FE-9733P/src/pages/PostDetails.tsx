import { useLoaderData } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  body: string;
  title: string;
}
interface CommentParams {
  id: number;
  body: string;
  name: string;
}

export const postLoader = async ({ params }: any) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await postResponse.json();

  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = await commentResponse.json();

  return { post, comments };
};

function PostDetails() {
  const { post, comments } = useLoaderData() as {
    post: PostParams;
    comments: CommentParams[];
  };
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) =>(
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PostDetails;
