import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Box } from '@coreym/benchmark';

function PrimaryNavItem({ label, subNavItem, href, isActive }) {
  return (
    <li key={href}>
      {isActive ? (
        <Link to={href}>
          <span>{label}</span>
        </Link>
      ) : (
        <Box color="n.500" sx={{ cursor: 'default' }}>
          {label}
        </Box>
      )}
      {subNavItem}
    </li>
  );
}

PrimaryNavItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  status: PropTypes.string,
};

export default PrimaryNavItem;
