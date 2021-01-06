import styled from 'styled-components';
import * as c from '../../styles/constants';

export const PostHeader = styled.header`
  padding: 5rem 5rem 0;
  margin: auto;

  @media (min-width: 320px) and (max-width: 768px) {
    padding: ${c.spaces.md} 1rem 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const PostTitle = styled.h1`
  margin: ${c.spaces.sm} auto 0;
  color: ${c.colors.whiteSecondary};
  font-size: ${c.fontSize.lg};
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 576px) {
    font-size: ${c.spaces.default};
  }
`;

export const PostDescription = styled.h2`
  margin-top: ${c.spaces.xs};
  color: ${c.colors.whiteSecondary};
  
  font-size: ${c.fontSize.md};
  font-weight: 300;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

export const PostInfors = styled.div`
  font-size: 1.1rem;
  color: ${c.colors.whiteSecondary};

  display: flex;
  align-items: center;
`;

export const PostDate = styled.span`
  margin-right: ${c.spaces.default};
  color: ${c.colors.whiteSecondary};

  font-size: ${c.spaces.ssm};
  font-weight: 300;
`;

export const PostToRead = styled.span`
  margin-right: ${c.spaces.default};
  color: ${c.colors.whiteSecondary};

  font-size: ${c.spaces.ssm};
  font-weight: 300;
`;

export const TagWrapper = styled.div`
  margin: ${c.spaces.sm} 0;
`;

export const MainContent = styled.section`
  margin: auto;
  padding: 2rem 5rem;
  color: ${c.colors.whiteSecondary};

  text-align: justify;

  @media (min-width: 320px) and (max-width: 768px) {
    max-width: 100%;
    padding: ${c.spaces.default} 1rem 0;
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 1rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 ${c.spaces.sm} ${c.spaces.sm};
    width: 100%;
  }

  blockquote {
    border-left: 0.3rem solid ${c.colors.blueSecundary};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid ${c.colors.blueSecundary};
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 1px dashed ${c.colors.blueSecundary};
    color: ${c.colors.blueSecundary};
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: ${c.colors.whitePrimary};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
