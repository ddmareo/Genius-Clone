import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, imageUrl, link }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <Link to="/lyrics" className="text-dark-500 hover:text-yellow-400 underline">Read more</Link>
        </div>
      </div>
    );
  };

const featuredcard = () => {
    const blogs = [
        {
          title: 'Featured Song 1',
          description: 'This will show the lyric of the featured song.',
          imageUrl: 'https://via.placeholder.com/500x500',
        },
        {
          title: 'Featured Song 2',
          description: 'This will show the lyric of the featured song.',
          imageUrl: 'https://via.placeholder.com/500x500',
        },
        {
          title: 'Featured Song 3',
          description: 'This will show the lyric of the featured song.',
          imageUrl: 'https://via.placeholder.com/500x500',
        }
      ];
    
      return (
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
              link={blog.link}
            />
          ))}
        </div>
      );
    };

export default featuredcard