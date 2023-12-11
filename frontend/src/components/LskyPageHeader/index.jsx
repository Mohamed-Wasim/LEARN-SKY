import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';
import { Stack } from 'react-bootstrap';

const LskyPageHeader = (props) => {
  const { t } = useTranslation();
  return (
    <Stack direction="horizontal" className="pb-4 px-5" gap={3}>
      <div>
        {props?.heading && (
          <p className="m-0 fs-6 text-primary fw-bold">{t(props?.heading)}</p>
        )}
        {props?.subHeading && (
          <p className="m-0 fs-2 text-secondary">{t(props?.subHeading)}</p>
        )}
      </div>
      <div className="ms-auto">
        <Stack direction="horizontal" gap={3}>
          {props.children}
        </Stack>
      </div>
    </Stack>
  );
};

export default LskyPageHeader;
