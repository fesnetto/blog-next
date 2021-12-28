import Head from 'next/head';
import { Container, Category, AllPostsLinks } from './styles';
import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import { Pagination, PaginationProps } from '../../components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage(
  { posts, category, pagination }: HomePageProps,
  HomePageProps,
) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta
          name="description"
          content="Este é meu blog de receitas e viagens."
        />
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
        )
      </MainContainer>
      <Footer />
    </>
  );
}
