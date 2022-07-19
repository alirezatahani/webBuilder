import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditTemplate = () => {
  const router: any = useRouter();
  console.log(router.query);

  return <div>this is grid-layout page</div>;
};

export default EditTemplate;
