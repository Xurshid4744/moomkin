import React from "react";
import styles from "./Blog.module.scss";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import BlogCard from "../../../components/Cards/BlogCard/BlogCard";

const Blog = () => {
  return (
    <section className={`${styles.blogContainer} globalContainer`}>
      <div className={styles.back}>
        <ArrowLeftOutlined />
        <p>Home Page</p>
      </div>
      <h2>Valuable Insights</h2>
      <div className={styles.titles}>
        <ul>
          <li tabIndex={1}>All</li>
          <li tabIndex={1}>Enterprise</li>
          <li tabIndex={1}>Startups</li>
          <li tabIndex={1}>Development</li>
          <li tabIndex={1}>Insights</li>
          <li tabIndex={1}>SumatoSoft</li>
          <li tabIndex={1}>Resources</li>
        </ul>
        <div className={styles.input}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search for.."
          />
          <span>
            <SearchOutlined />
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
