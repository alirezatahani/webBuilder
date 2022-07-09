import React, { useState } from 'react';
import { Container, Row, Col, ControlPanel } from '@components/index';
import SideActionButtons from '@modules/controlPanel/content/sideActionButtons/SideActionButtons';
import { Blank3 } from '@templates/plain/blank3';

const CreatePage = () => {
  const [selected, setSelected] = useState<null | string | any>(null);
  const [initialValue, setInitialValue] = useState({
    fontType: 'h2',
    fontFamily: 'Roboto',
    fontSize: 12,
    textDecoration: ['underline'],
    fontColor: '#c3c3c3',
    textAlign: 'center',
    btnText: 'Some text',
    btnSize: 'md',
  });

  return (
    <Container fluid>
      <Row>
        <Col span={8}>
          <Blank3 state={initialValue} setSelected={setSelected} />
        </Col>
        <Col span={3}>
          <ControlPanel
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            selected={selected}
          />
        </Col>
        <Col span={1}>
          <SideActionButtons />
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePage;
