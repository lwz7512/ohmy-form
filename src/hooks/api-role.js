import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

/**
 * 查询角色列表
 * @param {*} page 当前页
 * @param {*} size 每页记录数
 * @param {*} orders 排序，数组[{'column':'name', 'dir':'asc'},{'column':'title', 'dir':'desc'}]
 * @param {*} searchs 过滤条件，数组[{'column':'name', 'op':'eq', 'value':'系统字典'}]
 * @returns {*} {currPage:当前页, pageSize:每页记录数, totalNum:总记录数, totalPage:总页数, datas:数组[{每条记录为字典},{}]}
 */
export const fetchRoleList = (page, size, orders, searchs) => {
  const { data, error, loading } = usePostData(`/api/auth/v5/roles/filter`, {
    page: page,
    size: size,
    orders: orders,
    searchs: searchs,
  });
  return { data, error, loading };
};

/** 
 * 创建角色
 */
export const createRole = (name) => {
  const { data, error, loading } = usePostData(`/api/auth/v5/roles`, {
    name: name,
  });
  return { data, error, loading };
};

/** 
 * 修改角色
 */
export const modifyRole = (id, name) => {
  const { data, error, loading } = usePutData(`/api/auth/v5/roles/${id}`, {
    name: name,
  });
  return { data, error, loading };
};

/**
 * 查询角色
 * @param {*} id 
 * @returns {*} {data:{返回结果记录为字典}}
 */
export const fetchRole = (id) => {
  const { data, error, loading } = useFetchData(`/api/auth/v5/roles/${id}`);
  return { data, error, loading };
};

/** 
 * 删除角色
 */
export const removeRole = (id) => {
  const { data, error, loading } = useDeleteData(`/api/auth/v5/roles/${id}`);
  return { data, error, loading };
};

/**
 * 获取某个角色的用户列表
 * @param {*} id
 * @returns {*} {datas:数组[{返回结果记录为字典}]}
 */
export const fetchRoleAccounts = (roleId) => {
  const { data, error, loading } = useFetchData(
    `/api/auth/v5/roles/${roleId}/accounts`
  );
  return { data, error, loading };
};