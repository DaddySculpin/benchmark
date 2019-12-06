import Button from './Button';
import React from 'react';
import { IoMdHelpCircle } from 'react-icons/io';

const ToolbarButton = ({ icon, variant, ...rest }) => {
  const Icon = icon;
  const iconSize = variant === 'toolbar' ? 42 : 32;
  return (
    <Button {...rest} variant="toolbar">
      <Icon size={iconSize} />
    </Button>
  );
};

ToolbarButton.defaultProps = {
  icon: IoMdHelpCircle,
  direction: 'row',
  variant: 'toolbar'
};

export default ToolbarButton;
