import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePermission = (permission) => {
  // Use useSelector to access the permissions from the Redux store
  const { permissions } = useSelector((state) => state.common);
  const [hasPermission, setHasPermission] = useState();

  useEffect(() => {
    if (permissions) {
      const perms = permissions.filter((perm) => perm.Code === permission);
      setHasPermission(perms.length > 0);
    } else {
      setHasPermission(false);
    }
  }, [permissions, permission]);
  // Check if the provided permission is present in the permissions array

  return hasPermission;
};

export default usePermission;
