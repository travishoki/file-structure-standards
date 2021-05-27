import React from 'react';

import { Wrapper } from './ComponentE.styles';
import { toUpperCase } from './ComponentE.helpers';
import { TITLE_TEXT } from './ComponentE.constants';

const ComponentE = () => (
  <Wrapper>
    {toUpperCase(TITLE_TEXT)}
  </Wrapper>
);

export default ComponentE;
