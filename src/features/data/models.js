import { PropTypes } from 'react';

export const postShape = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
