import React, { Suspense } from "react";
import Select from "react-select";
import "./styles.scss";
const AsyncSelect = React.lazy(() => import("react-select/async"));

/**
 * SelectControl component.
 *
 * @component
 * @param {object} props - Component props.
 * @param {boolean} props.isApi - Whether the options are fetched from an API.
 * @param {Array} props.data - Array of options for the select component.
 * @param {number} props.curntIndex - Index of the currently selected option.
 * @param {function} props.onChange - Function to handle option change event.
 * @param {function} props.loadOptions - Function to load options from API (for AsyncSelect).
 * @returns {JSX.Element} SelectControl component JSX element.
 */
const LskyReactSelect = (props) => {
  /**
   * Custom styles for React Select component.
   */

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#fff",
      borderColor: state.isFocused ? "#0D9BE1" : "#DFE1E5",
      borderRadius: props.rad ?? "4px",
      borderWidth: "1px",
      fontSize: "14px",
      color: "#091E42",
      innerHeight: "25px",
      padding: "0",
      boxShadow: state.isFocused ? null : null,
      ".css-1p3m7a8-multiValue": {
        borderRadius: "4px",
        backgroundColor: "#E2F3FB"
      },
      ".css-1u9des2-indicatorSeparator": {
        display: "none"
      },
      ".css-12a83d4-MultiValueRemove": {
        borderBottomRightRadius: "4px !important",
        borderTopRightRadius: "4px !important"
      },
      "&:hover": {
        // borderColor: state.isFocused ? "red" : "blue"
      },
      ...(props.isSearch && {
        ".css-1xc3v61-indicatorContainer": {
          display: "none"
        },
        ".css-15lsz6c-indicatorContainer": {
          display: "none"
        },
        ".css-1u9des2-indicatorSeparator": {
          display: "none"
        }
      }),
      ...(props.isInvalid && {
        ".control": {
          borderColor: "red"
        }
      })
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "13px",
      color: state.isSelected ? "#fff" : "#091E42"
    })
  };
  const customNoOptionsMessage = ({ inputValue }) => {
    if (inputValue === "") {
      return null;
    }
    return null;
  };
  const defaultValue =
    props.data &&
    props.defaultValue &&
    props.data.find((option) => option[props.value] === props.defaultValue);
  //   const OptionComponent = props?.isCheckbox ? CheckboxOption : undefined;

  return (
    <Suspense fallback={<p>....Loading</p>}>
      <div className={` ${props.className} `}>
        {props?.isApi ? (
          <AsyncSelect
            className={props.isInvalid ? "is-invalid" : ""}
            styles={customStyles}
            value={defaultValue}
            onBlur={props.onBlur}
            onChange={props.onChange}
            placeholder={props.placeholder}
            isMulti={props.isMulti}
            name={props?.name}
            getOptionLabel={
              props.label
                ? (option) => option[props.label]
                : (option) => option.label
            }
            getOptionValue={
              props.value
                ? (option) => option[props.value] ?? option.value
                : (option) => option.value
            }
            // components={{ Control }}
            isDisabled={props.disabled}
            loadOptions={props.loadOptions}
            // components={{ Option: OptionComponent }}
            defaultOptions={props.defaultValue}
            defaultValue={props.defaultValue}
            noOptionsMessage={customNoOptionsMessage}
          />
        ) : (
          <Select
            // className={props.isInvalid ? 'form-control is-invalid' : ''}
            styles={customStyles}
            value={defaultValue}
            onBlur={props.onBlur}
            onChange={props.onChange}
            options={props.data}
            isMulti={props.isMulti}
            name={props?.name}
            getOptionLabel={
              props.label
                ? (option) => option[props.label]
                : (option) => option.label
            }
            getOptionValue={
              props.value
                ? (option) => option[props.value] ?? option.value
                : (option) => option.value
            }
            isDisabled={props.disabled}
            // components={{ Control }}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            noOptionsMessage={customNoOptionsMessage}
          />
        )}
      </div>
    </Suspense>
  );
};

export default LskyReactSelect;
