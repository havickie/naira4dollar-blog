import Link from "next/link";
import React from "react";

import moment from "moment";
import styles from "../styles/BlogCard.module.scss";

const PostCard = ({ post }) => {
  return (
    <div className={`container ${styles.card} `}>
      <div className={styles.imgContainer}>
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} alt={post.title} />
        </Link>
      </div>
      <h1 >
        <a className={`${styles.texts}`} href={`/post/${post.slug}`}>{post.title}</a>
      </h1>
      <div>
        <p>
          <a className={styles.excerpt} href={`/post/${post.slug}`}>
            {post.excerpt}
          </a>
        </p>
      </div>
      <div>
        <span className={styles.date}>
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
