import React from 'react';

const PropsValidator = ({ name, age }) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold"> name : {name}</h1>
      <h2 className="text-xl font-semibold"> age : {age}</h2>
    </div>
  );
};

PropsValidator.propTypes = {
  name(props, propName, componentName) {
    const type = typeof props[propName];

    if (type !== 'string') {
      return new Error(`Wrong type of prop in ${componentName} component`);
    }
  },
  age(props, propName, componentName) {
    const type = typeof props[propName];

    if (type !== 'number') {
      return new Error(`Wrong type of prop in ${componentName} component`);
    }
  },
};
export default PropsValidator;
