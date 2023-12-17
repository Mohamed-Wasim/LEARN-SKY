import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
const AsyncSelect = React.lazy(() => import("react-select/async"));
// this is single selesct example
/* <Select
  className="basic-single"
  classNamePrefix="select"
  defaultValue={colourOptions[0]}
  isDisabled={isDisabled}
  isLoading={isLoading}
  isClearable={isClearable}
  isRtl={isRtl}
  isSearchable={isSearchable}
  name="color"
  options={colourOptions}
/>; */

// this is multi select example
{
  /* <Select
defaultValue={[colourOptions[2], colourOptions[3]]}
isMulti
name="colors"
options={colourOptions}
className="basic-multi-select"
classNamePrefix="select"
/> */
}
const SimpleSelect = ({
  options,
  labelKey,
  valueKey,
  label,
  isRequired,
  errors,
  isApi,

  ...rest
}) => {
  const { t } = useTranslation();
  const customNoOptionsMessage = ({ inputValue }) => {
    if (inputValue === "") {
      return null;
    }
    return null;
  };
  return (
    <>
      <FormGroup>
        {label && (
          <FormLabel
            className={`fs-3 mb-1 text-secondary ${isRequired && "require"}`}
          >
            {t(label)}
          </FormLabel>
        )}
        {errors && (
          <FormControl.Feedback type="invalid">
            {t(errors)}
          </FormControl.Feedback>
        )}
      </FormGroup>
      {isApi ? (
        <AsyncSelect
          getOptionLabel={(option) => option[labelKey]}
          getOptionValue={(option) => option[valueKey]}
          noOptionsMessage={customNoOptionsMessage}
          {...rest}
        />
      ) : (
        <Select
          options={options.map((option) => ({
            label: option[labelKey],
            value: option[valueKey]
          }))}
          {...rest}
        />
      )}
    </>
  );
};
export default SimpleSelect;
