import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import LskyMatIcon from '../LskyMatIcon';
import './styles.scss';
const LskyButton = (props) => {
  const { icon, ...rest } = props;
  const BUTTONICON = {
    edit: 'edit_square',
    notify: 'notifications',
    new: 'add',
    cancel: 'close',
    config: 'settings',
    upload: 'upload',
    download: 'download',
    search: 'search',
    print: 'print',
    delete: 'delete',
    filter: 'filter_list',
    sort: 'filter_alt'
  };
  return (
    <BootstrapButton {...rest}>
      <>
        {BUTTONICON[icon] && <LskyMatIcon name={BUTTONICON[icon]} />}
        {props.children}
      </>
    </BootstrapButton>
  );
};
export default LskyButton;
