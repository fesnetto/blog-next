import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </div>
  );
}
