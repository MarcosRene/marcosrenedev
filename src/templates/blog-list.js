import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import SEO from '../components/seo';
import Panigantion from '../components/Pagination';

import LoaderAnimation from '../components/LoaderAnimation';

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <>
      <LoaderAnimation />
      <Layout>
        <SEO title="Home" />
        {postList.map(
          ({
            node: {
              frontmatter: { tag, date, title, description },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              tag={tag}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
        <Panigantion
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Layout>
    </>
  );
};

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "MMMM [de] YYYY")
            description
            tag
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
