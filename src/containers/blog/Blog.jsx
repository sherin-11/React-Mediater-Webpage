import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="mediator__blog section__padding" id="blog">
    <div className="mediator__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="mediator__blog-container">
      <div className="mediator__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 26, 2024" text="From Content Creators to Brands: Maximizing Potential with Mediater" />
      </div>
      <div className="mediator__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 23, 2023" text="How does social media influencer effect our life?" />
        <Article imgUrl={blog03} date="Jan 12, 2023" text="Unlocking Success: The Power of Collaboration with Mediater" />
        <Article imgUrl={blog04} date="Sep 26, 2022" text="Navigating the Influencer Maze: How Mediater Simplifies Your Journey" />
        <Article imgUrl={blog05} date="Aug 05, 2022" text="Mastering ROI: How Mediater Boosts Your Bottom Line" />
      </div>
    </div>
  </div>
);

export default Blog;