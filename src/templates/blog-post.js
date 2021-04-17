import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Tag from '../components/Tag';

import * as S from '../components/Post/styled';
import Recommended from '../components/Recommended';

function BlogPost({ data, pageContext }) {
  const { frontmatter, timeToRead, html } = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />

      <S.ButtonBack className="arrowBack" to="/">
        ← Voltar a listagem
      </S.ButtonBack>

      <S.PostHeader>
        <S.PostInfors>
          <S.PostDate>{frontmatter.date}</S.PostDate>
          <S.PostToRead>{timeToRead} min de leitura</S.PostToRead>
        </S.PostInfors>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostDescription>{frontmatter.description}</S.PostDescription>
        <S.TagWrapper>
          <Tag tagName={frontmatter.tag} />
        </S.TagWrapper>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainContent>
      <Recommended next={next} previous={previous} />
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "MMMM [de] YYYY")
        tag
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
