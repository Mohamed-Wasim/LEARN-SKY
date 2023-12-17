import React, { useState, useRef } from "react";
import LskyFilePreview from "../LskyFilePreview";
import "./styles.scss";
import LskyMatIcon from "../LskyMatIcon";
import { useDispatch } from "react-redux";
import { addDeleteques } from "../../store/slices/fileslice";

const LskyFileUpload = (props) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const containerElement = containerRef.current;
    if (!containerElement.contains(e.target)) {
      setIsDragging(false); // Set isDragging to false when leaving the container
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Additional code for handling the drag-over event, if needed.
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log(isDragging);
    // Access the container element using the ref
    const containerElement = containerRef.current;
    // Check if the dropped element is inside the container or its children
    if (containerElement.contains(e.target)) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    e.preventDefault();
    // Handle files selected via the file input
    handleFiles(e.target.files);
  };

  const checkFileType = (files) => {
    if (props.isMulti) {
      console.log("multiple");
    } else {
      const acceptedType = props.accept
        .split(/\s*,\s*/) // Split by commas and optional spaces
        .map((format) => format.replace(/^\./, "")); // Remove the leading dot
      return acceptedType.some(
        (format) => format === files[0].name.split(".")[1]
      );
    }
  };

  const handleFiles = (files) => {
    // Handle the selected files here
    if (files.length > 0) {
      if (props.accept) {
        if (checkFileType(files)) {
          props.onSelectFiles(files[0]);
        }
      } else {
        props.onSelectFiles(files[0]);
      }
    }
  };

  const clearFile = (src) => {
    if (typeof src === "string") {
      dispatch(addDeleteques(src));
    }
    props.onSelectFiles("");
  };
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {(props.isMulti && Array.isArray(props.src)) || !props.src ? (
        <>
          <div
            ref={containerRef}
            className={"Lsky-file_dnd"}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            key="cont-drop"
          >
            <div
              className="drag-txt"
              key="child-drop"
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {"Drag 'n' drop some files here"}
            </div>
            <div
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="drop-or"
            >
              or
              <label
                htmlFor="Lsky-file"
                className="btn-rounded secondary-btn file-btn"
                onDragOver={handleDragOver}
              >
                Choose a file
              </label>
            </div>
            <input
              type="file"
              id="Lsky-file"
              hidden
              accept={props.accept}
              key={Math.random(1, 40)}
              onDragOver={handleDragOver}
              onChange={handleFileInputChange}
            />
          </div>
          <p className="selective-file">Supported files: {props.accept}</p>
        </>
      ) : (
        <div className="file-wrapper">
          <LskyMatIcon
            name="Cancel"
            className="file-clear"
            onClick={() => clearFile(props.src)}
          />
          <LskyFilePreview file={props.src} />
        </div>
      )}
    </div>
  );
};

export default LskyFileUpload;
