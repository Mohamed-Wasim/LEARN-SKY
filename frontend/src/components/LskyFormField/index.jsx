import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./styles.scss";
const LskyInput = React.lazy(() => import("../LskyInput"));
const LskyReactSelect = React.lazy(() => import("../LskySelect"));
const CheckBox = React.lazy(() => import("../LskyCheckBox"));
const LskyTextArea = React.lazy(() => import("../LskyTextArea"));
const LskyDatePicker = React.lazy(() => import("../LskyDatePicker"));

const FormField = React.memo(
    ({
        field,
        fieldName,
        isRequired,
        label,
        handleChange,
        handleBlur,
        errors,
        value,
        labelKey,
        touched,
        ...rest
    }) => {
        const { t } = useTranslation();
        const createChildren = (child, props) => {
            const datePickerFormat = !rest.timeFormat ? "DD-MMM-YYYY" : "hh:mm";
            switch (child) {
                case "input":
                    return <LskyInput {...props} {...rest} />;
                case "select":
                    return <LskyReactSelect {...props} {...rest} />;
                case "check":
                    return <CheckBox {...props} {...rest} />;
                case "textarea":
                    return <LskyTextArea {...props} {...rest} />;
                case "date":
                    return (
                        <LskyDatePicker
                            placeholder={datePickerFormat}
                            {...props}
                            {...rest}
                        />
                    );
                default:
                    return <FormControl {...props} {...rest} />;
            }
        };

        const generateProps = (name) => {
            return {
                name,
                onChange: handleChange,
                onBlur: handleBlur,
                isInvalid: touched && errors,
                value,
                label: t(labelKey)
            };
        };

        return (
            <FormGroup>
                {label && field !== "check" && (
                    <FormLabel
                        className={`fs-3 mb-1 text-secondary ${
                            isRequired && "require"
                        }`}
                    >
                        {t(label)}
                    </FormLabel>
                )}
                {createChildren(field, generateProps(fieldName))}
                {errors && (
                    <FormControl.Feedback type="invalid">
                        {t(errors)}
                    </FormControl.Feedback>
                )}
            </FormGroup>
        );
    }
);
FormField.displayName = "FormField";
export default FormField;
