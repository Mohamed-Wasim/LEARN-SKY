import React, { useState } from 'react';
import PDF from '../../assets/img/pdf.svg';
const LskyModal = React.lazy(() => import('@components/LskyModal'));
const LskyFilePreview = ({ file }) => {
  const [previewSource, setPreviewSource] = useState(file);
  React.useEffect(() => {
    if (!file) return;
    if (typeof file === 'object') {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreviewSource(fileReader.result);
      };
      fileReader.readAsDataURL(file);
      return () => {
        fileReader.abort();
      };
    } else {
      setPreviewSource(file);
    }
  }, [file]);

  if (!file) return null;

  const openOtherDoc = () => {
    return (
      <LskyModal>
        <iframe src={previewSource} title={file.name} />
      </LskyModal>
    );
  };
  const previewOtherFiles = () => {
    return <img src={PDF} alt={file.type} onClick={openOtherDoc} />;
  };
  switch (file.type) {
    case 'image/jpeg':
    case 'image/jpeg':
    case 'image/png':
    case 'image/webp':
      return <img src={previewSource} alt={file.name} />;
    case 'application/pdf':
      return previewOtherFiles('pdf');
    default:
      return <p>Preview not available for this file type.</p>;
  }
};

export default LskyFilePreview;
