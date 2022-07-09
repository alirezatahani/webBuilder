import React from 'react';
import { ChooseTemplates } from '@modules/chooseTemplates';
import { Portal } from '@components/index';

const Home = () => {
  return (
    <>
      <Portal>
        <ChooseTemplates />
      </Portal>
    </>
  );
};
export default Home;
