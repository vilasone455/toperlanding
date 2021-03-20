import { Post } from "../components/Post";
import { posts } from "../getPosts";
import Container from '@material-ui/core/Container';
export default function PostPage() {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </Container>
  );
}

// My blog: https://www.ibrahima-ndaw.com/