// pages/dashboard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PostCard from '../components/PostCard';

const DashboardPage = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      axios
        .get('http://localhost:5000/api/posts', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setPosts(response.data))
        .catch((error) => console.error('Error fetching posts', error));
    }
  }, [router]);

  const handleCreatePost = () => {
    router.push('/create-post'); 
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <button onClick={handleCreatePost} className="btn">Create New Post</button>
      <div className="post-list">
        {posts.length === 0 ? (
          <p>No posts found. Start by creating your first post!</p>
        ) : (
          posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
