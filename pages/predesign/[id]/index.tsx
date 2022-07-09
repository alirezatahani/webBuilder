import { Design37 } from '@templates/designed/37';
import { Design94 } from '@templates/designed/94';
import { Design24 } from '@templates/designed/24';
import { useRouter } from 'next/router';
import React from 'react';

const DESIGNS: any = {
  '37': <Design37 />,
  '24': <Design24 />,
  '94': <Design94 />,
};

const PreDesign = () => {
  const router: any = useRouter();

  return <div>{DESIGNS[router.query.id]}</div>;
};

export default PreDesign;
