import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cover = styled.img`
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  border: 0 solid #FF7085;
  transition: border 250ms;
`;

const Wrapper = styled.a`
  display: block;
  text-decoration: none;
  width: 180px;

  &:hover ${Cover} {
    border: 10px solid #FF7085;
    transition: border 250ms;
  }
`;

const Text = styled.h3`
  font-family: Roboto, sans-serif;
  color: #2E2C2D;
  font-weight: bold;
  margin-top: 7.5px;
`;

class Album extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, cover } = this.props;

    return (
      <Wrapper href="#">
        <Cover src={cover} alt="Album Cover" />
        <Text>{title}</Text>
      </Wrapper>
    );
  }
}

Album.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Album;
