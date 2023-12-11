import React, { useEffect } from 'react';
import { useBlocker } from 'react-router-dom';
import { setIsDirty } from '../../store/slices/commonslice';
import { useDispatch } from 'react-redux';
function LskyPrompt(props) {
  const block = props.when;
  const dispatch = useDispatch();
  useBlocker(() => {
    if (block) {
      dispatch(setIsDirty(false));
      return !window.confirm(props.message);
    }
    return false;
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (block) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    const handleUnload = () => {
      if (block) {
        // if any need to be done on cancel confirm
        console.log('not loaded');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, [block]);

  return <div key={block} />;
}

export default LskyPrompt;
