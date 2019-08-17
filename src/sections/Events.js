import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const EventImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const EventTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Event = ({ name, description, eventUrl, type, publishedDate, logo }) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <EventImage src={logo.file.url} alt={logo.title} />
        <EventTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="Open Event"
                fontAwesomeIcon="calendar"
                src={eventUrl}
              />
            </Box>
          </Flex>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle
              bg="primary"
              color="white"
              y="bottom"
              x="right"
              round
            >
              {type}
            </ImageSubtitle>
          </Hide>

          <ImageSubtitle bg="backgroundDark" y="top" x="right" round>
            {publishedDate}
          </ImageSubtitle>
        </EventTag>
      </ImageContainer>
    </Flex>
  </Card>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const Events = () => (
  <Section.Container id="events" Background={Background}>
    <Section.Header name="Upcoming Events" label="notebook" />
    <StaticQuery
      query={graphql`
        query EventsQuery {
          allContentfulEvents(sort: { fields: publishedDate }) {
            nodes {
              name
              eventUrl
              id
              description
              publishedDate(formatString: "DD/MM/YYYY")
              logo {
                description
                file {
                  url
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulEvents }) => (
        <CardContainer minWidth="350px">
          {allContentfulEvents.nodes.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Event {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Events;
