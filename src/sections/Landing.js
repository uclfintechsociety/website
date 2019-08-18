import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Heading, Flex, Box, Text, Image } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import splash from '../../media/splash_pic.png';

const SplashImage = styled(Image)`
  position: absolute;
  top: 0px;
  z-index: -10;
  object-fit: cover;
  /*filter: blur(2px);
  -webkit-filter: blur(2px);*/
`;

const Background = () => (
  <div>
    <SplashImage
      src={splash}
      alt="splash"
      width={['100vw', '100vw']}
      height={['100vh', '100vh']}
    />
    <Triangle
      color="secondary"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
    <Triangle
      color="backgroundDark"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
            splashLogoLight {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles, profile } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h3"
              color="white"
              fontSize={[6, 7, 8]}
              mb={[2, 3, 4]}
            >
              {name}
              {/*<Image src={splashLogoLight.image.src} alt={profile.title} />*/}
            </Heading>

            <Heading
              as="h1"
              color="#fff"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={3000}>
                {roles
                  .sort(() => Math.random() - 0.5)
                  .map(text => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about" color="white">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
