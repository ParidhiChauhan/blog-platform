import React from 'react';

const PostCard = ({ post }: any) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
