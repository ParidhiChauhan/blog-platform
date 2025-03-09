import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import PostCard from '../components/PostCard';


const PostsPage = ({ posts }: { posts: any[] }) => {
  return (
    <div className="posts">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/posts');
    const posts = res.data;

    return {
      props: {
        posts
      },
      revalidate: 10 
    };
  } catch (error) {
    return {
      props: {
        posts: []
      }
    };
  }
};

export default PostsPage;
