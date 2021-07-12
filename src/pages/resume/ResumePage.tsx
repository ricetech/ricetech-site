import React from 'react';
import { Container } from 'react-bootstrap';

import './_resume.scss';

export const ResumePage = () => {
  const x = 'My Resume';
  return (
    <Container>
      <h1 className="mt-3">{x}</h1>
      <iframe
        className="resume--iframe mt-3"
        src="https://drive.google.com/file/d/1x0agAtNZFwKjTE75jqq7SzaTh2O4mocc/preview"
        allow="autoplay"
      />
    </Container>
  );
};
