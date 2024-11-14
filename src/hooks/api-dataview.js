import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

export const fetchDataviewList = (page, size, orders, searchs) => {
  const { data, error, loading } = usePostData(`/api/dataview/list`, {
    page: page,
    size: size,
    orders: orders,
    searchs: searchs,
  });
  return { data, error, loading };
};

export const fetchDataview = (id) => {
  const { data, error, loading } = useFetchData(`/api/dataview/${id}`);
  return { data, error, loading };
};

export const createDataview = (title, displayType) => {
  const { data, error, loading } = usePostData(`/api/dataview`, {
    title: title,
    displayType: displayType,
  });
  return { data, error, loading };
};

export const modifyDataview = (id, title, displayType) => {
  const { data, error, loading } = usePutData(`/api/dataview/${id}`, {
    title: title,
    displayType: displayType,
  });
  return { data, error, loading };
};

export const removeDataview = (id) => {
  const { data, error, loading } = useDeleteData(`/api/dataview/${id}`);
  return { data, error, loading };
};
