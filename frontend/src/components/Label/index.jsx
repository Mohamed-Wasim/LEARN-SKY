import React from 'react';
import BSForm from 'react-bootstrap/Form';

/**
 * Label component for rendering a form label.
 *
 * @component
 * @example
 * // Example usage:
 * <Label htmlFor="username">Username</Label>
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.htmlFor] - The ID of the form element associated with the label.
 * @param {ReactNode} props.children - The content of the label.
 * @returns {ReactNode} The rendered Label component.
 */
const Label = (props) => {
  return <BSForm.Label {...props} />;
};

export default Label;
