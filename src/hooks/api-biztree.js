import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

// 查询树，以树状结构返回
export const fatchBiztree = (nodeid) => {
  const { data, error, loading } = useFetchData(`/api/sys/trees/${nodeid}/tree`);
  return { data, error, loading };
};

// 查询树，以数组结构返回
export const fatchBiztreeAsTable = (nodeid) => {
  const { data, error, loading } = useFetchData(`/api/sys/trees/${nodeid}/table`);
  return { data, error, loading };
};

// 创建根节点
export const createBiztreeRoot = (rootid, title, description) => {
  const { data, error, loading } = usePostData(`/api/sys/trees/root`, {
    rootid: rootid,
    title: title,
    description: description,
  });
  return { data, error, loading };
};

// 创建树节点
export const createBiztreeNode = (pid, title, description) => {
  const { data, error, loading } = usePostData(`/api/sys/trees/node`, {
    pid: pid,
    title: title,
    description: description,
  });
  return { data, error, loading };
};

// 修改树节点信息
export const modifyBiztreeNode = (nodeid, title, description) => {
  const { data, error, loading } = usePutData(`/api/sys/trees/${nodeid}`, {
    title: title,
    description: description,
  });
  return { data, error, loading };
};

// 删除树节点
export const removeBiztreeNode = (nodeid) => {
  const { data, error, loading } = useDeleteData(`/api/sys/trees/${nodeid}`);
  return { data, error, loading };
};