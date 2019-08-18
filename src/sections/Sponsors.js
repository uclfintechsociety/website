import React from 'react';
import { Box, Heading, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  /*border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }*/
`;

const Sponsors = () => (
  <Section.Container id="sponsors" Background={Background}>
    <Section.Header name="Our Sponsors" label="person" />
    <StaticQuery
      query={graphql`
        query SponsorsQuery {
          allContentfulSponsors {
            nodes {
              name
              type
            }
          }
        }
      `}
      render={({ allContentfulSponsors }) => (
        <>
          {allContentfulSponsors.nodes.map((p, i) => (
            <Flex justifyContent="center" alignItems="center" flexWrap="nowrap">
              <Heading>Hi</Heading>
            </Flex>
          ))}
        </>
      )}
    />
  </Section.Container>
);

export default Sponsors;
