import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

/** 
 * 登录
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