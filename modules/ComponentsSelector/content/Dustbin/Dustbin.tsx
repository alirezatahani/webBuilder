import React from 'react';
import type { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Typography, Input, Image } from '@components/index';

const ItemTypes = {
  BOX: 'box',
};

const style: CSSProperties = {
  height: '100vh',
  overflow: 'scroll',
  padding: 30,
  textAlign: 'center',
};
type DustBinProps = {
  selectedComponent?: any;
  selectedStyle?: any;
  handleDrop?: any;
};

type CProps = {
  Button: JSX.Element;
  Typography: JSX.Element;
  Input: JSX.Element;
  Image: JSX.Element;
};

export const Dustbin = ({ selectedComponent, selectedStyle }: DustBinProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = 'white';
  if (isActive) {
    backgroundColor = '#F5F5F5';
  } else if (canDrop) {
    backgroundColor = '#F5F5';
  }

  const components: CProps = {
    Button: <Button style={selectedStyle}>test</Button>,
    Typography: <Typography variant={selectedStyle.variant}>text</Typography>,
    Input: <Input value="test" />,
    Image: <Image />,
  };

  return (
    <React.Fragment>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {/* @ts-ignore */}
        {selectedComponent && components[selectedComponent]}
      </div>
    </React.Fragment>
  );
};
