import React from 'react';
import LskyMatIcon from '@components/LskyMatIcon';
import './styles.scss';
import LskyButton from '@components/LskyButton';

const LskyMessage = (props) => {
  return (
    // <div className={`${props?.type}-msg`}>
    <div className={`alert alert-${props?.type}`} role="alert">
      <div className="message-info_label">
        <div>
          <LskyMatIcon name="check_circle" />
        </div>
        <div>
          <p className="fs-4 m-0 fw-bold">{props?.title}</p>
          <p className="fs-3 m-0">{props?.message}</p>
        </div>
      </div>

      <div className="message-info_btn">
        {props?.hasAction && (
          <div>
            <LskyButton
              onClick={() => {
                props?.hasAction();
                props?.clear();
              }}
              variant="secondary"
              size="sm"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              View
            </LskyButton>
          </div>
        )}
        <div className="message-close">
          <LskyMatIcon name="close" onClick={props?.clear} />
        </div>
      </div>
    </div>
  );
};

export default LskyMessage;
