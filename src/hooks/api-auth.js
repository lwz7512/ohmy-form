import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

/**
 * 登录
 * @param {*} username 
 * @param {*} password 请使用md5(pwd)加密后传入此参数
 * @returns 
 */
export const login = (username, password) => {
  const { data, error, loading } = usePostData(`/api/auth/v5/login`, {
    username: username,
    password: password,
  });
  localStorage.setItem('formas.jwt', data);
  return { data, error, loading };
};

/** 
 * 登出
 */
export const logout = () => {
  const { data, error, loading } = useDeleteData(`/api/auth/v5/logout`);
  return { data, error, loading };
};

/**
 * 修改密码
 * @param {*} oldPwd 请使用md5(pwd)加密后传入此参数
 * @param {*} newPwd 请使用md5(pwd)加密后传入此参数
 * @returns 
 */
export const changePassword = (oldPwd, newPwd) => {
  const { data, error, loading } = usePostData(`/api/auth/v5/change-pwd`, {
    oldPwd: oldPwd,
    newPwd: newPwd,
  });
  return { data, error, loading };
};