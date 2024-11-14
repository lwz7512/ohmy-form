import useFetchData from './useFetchData';
import usePostData from './usePostData';
import usePutData from './usePutData';
import useDeleteData from './useDeleteData';

export const fetchDisctionaryList = (page, size, orders, searchs) => {
  const { data, error, loading } = usePostData(`/api/sys/dictionaries/list`, {
    page: page,
    size: size,
    orders: orders, // [{'column':'name', 'dir':'asc'},{'column':'title', 'dir':'desc'}]
    searchs: searchs, // [{'column':'name', 'op':'eq', 'value':'系统字典'}]
  });
  return { data, error, loading };
};

export const fetchDisctionary = (id) => {
  const { data, error, loading } = useFetchData(`/api/sys/dictionaries/${id}`);
  return { data, error, loading };
};

export const createDisctionary = (category, seq, value) => {
  const { data, error, loading } = usePostData(`/api/sys/dictionaries`, {
    category: category,
    seq: seq,
    value: value,
  });
  return { data, error, loading };
};

export const modifyDisctionary = (category, seq, value) => {
  const { data, error, loading } = usePutData(`/api/sys/dictionaries/${id}`, {
    category: category,
    seq: seq,
    value: value,
  });
  return { data, error, loading };
};

export const removeDisctionary = (id) => {
  const { data, error, loading } = useDeleteData(`/api/sys/dictionaries/${id}`);
  return { data, error, loading };
};