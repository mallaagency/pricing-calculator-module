import React, { forwardRef } from "react";
// import PropTypes from 'prop-types'

const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="py-2 inline-block">
      {label && (
        <label className="block pb-2 text-gray-400 text-xs">{label}</label>
      )}
      <input
        ref={ref}
        {...rest}
        className="border w-full border-gray-100  rounded h-10 py-0 px-6 text-base focus:border-blue-500 dark:bg-gray-800 dark:border-gray-900"
      />
    </div>
  );
});

Input.propTypes = {};

export default Input;
