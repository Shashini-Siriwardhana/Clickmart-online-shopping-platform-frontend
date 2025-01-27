import React, { ReactNode } from 'react';
import { IconButton, Tooltip, IconButtonProps } from '@mui/material';

interface TooltipIconButtonProps {
  tooltipText: string;
  children: ReactNode;
  tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

const TooltipIconButton: React.FC<TooltipIconButtonProps & IconButtonProps> = ({
  tooltipText,
  children,
  tooltipPlacement = 'top',
  ...iconButtonProps
}) => {
  return (
    <Tooltip title={tooltipText}>
      <span>
        <IconButton disabled={iconButtonProps.disabled} {...iconButtonProps}>
          {children}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default TooltipIconButton;
