import Content from './Content';
import Heading from './Heading';
import React from 'react';

const Header = (props) => {
  return (
    <div className="pt-8 w-[1120px] flex-col justify-start items-start inline-flex">
      <Heading title={props.title} />
      <Content description={props.description} />
    </div>
  );
};

export default Header;
