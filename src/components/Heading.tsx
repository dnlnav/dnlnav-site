import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const StyledHeading = styled.h1`
  font-size: 32px;
`;

const Heading = () => {
  const {
    contentfulLandingPage: {
      heading,
      description: { description },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      contentfulLandingPage {
        heading
        description {
          description
        }
      }
    }
  `);
  return (
    <div>
      <StyledHeading className="bg-red-500">{heading}</StyledHeading>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
