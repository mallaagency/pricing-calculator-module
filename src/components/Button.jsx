import React from "react";
import PropTypes from "prop-types";

function Button({
	onClick,
	name,
	type = "default",
	isDisable = false,
	isFullWidth,
	size = "sm",
}) {
	const disableStyle = `text-gray-300 bg-gray-50`;
	const types = {
		primary: "text-white bg-blue-600 hover:bg-blue-500",
		secondary: "text-blue-500 bg-blue-50 hover:bg-blue-100",
		yellow: "text-white bg-yellow-500 hover:bg-yellow-100 hover:text-blue-500",
		default: "text-gray-500 bg-gray-50 hover:bg-blue-500",
	};

	const styles = isDisable ? disableStyle : types[type];
	const sizes = {
		sm: "px-4 h-10 text-xs",
		lg: "px-5 h-12 text-base  font-medium",
	};

	const handlerOnClick = () => {
		if (isDisable) {
			return null;
		} else {
			onClick && onClick();
		}
	};
	return (
		<button
			onClick={handlerOnClick}
			className={`${styles} ${
				isFullWidth ? "w-full" : "w-auto"
			} inline-flex items-center justify-center ${
				sizes[size]
			} rounded-md  uppercase font-bold`}>
			{name}
		</button>
	);
}

Button.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	isFullWidth: PropTypes.bool,
	size: PropTypes.string,
	isDisable: PropTypes.bool,
	onClick: PropTypes.func,
};

export default React.memo(Button);
