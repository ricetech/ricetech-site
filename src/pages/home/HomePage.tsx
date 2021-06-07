import React from 'react';

import './_home.scss';
import { Container, Figure, Jumbotron } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <>
      <Container className="mt-4">
        <Jumbotron fluid>
          <h1>Welcome!</h1>
          <p>
            This is my personal website. I'll be adding more content to it over
            the next few weeks.
          </p>
          <Figure>
            <Figure.Image
              className="app-logo"
              alt="RiceTech Logo"
              src="img/logo/the_ricetech-23.svg"
            />
          </Figure>
        </Jumbotron>
      </Container>
    </>
  );
};
