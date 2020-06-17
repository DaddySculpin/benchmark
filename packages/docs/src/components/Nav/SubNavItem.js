import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Box } from '@coreym/benchmark';

function PrimarySubNavItem({ url, title, isActive = false, isNewTab = false }) {
  const ActiveLink =
    isNewTab === true ? (
      <a href={url} rel="noreferrer" target="_blank">
        {title}
      </a>
    ) : (
      <Link to={url}>
        <span>{title}</span>
      </Link>
    );

  const InactiveLink = (
    <Box color="n.500" sx={{ cursor: 'default' }}>
      {title}
    </Box>
  );

  return <li>{isActive ? ActiveLink : InactiveLink}</li>;
}

PrimarySubNavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isNewTab: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default PrimarySubNavItem;
