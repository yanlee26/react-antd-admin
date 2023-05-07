import type { TablePaginationConfig } from 'antd/lib/table/interface';

import locale from 'antd/lib/locale/zh_CN';
import { useCallback, useEffect, useState } from 'react';

export interface PaginationProps extends TablePaginationConfig {
  setPageSize?: (pageSize: number) => void;
  pageSize: number;
  pageNum?: number;
  total?: number;
  defaultCurrent?: number;
  setPageNum?: (pageNum: number) => void;
}
export const INITIAL_NUM = 1;
export const INITIAL_SIZE = 20;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// read
export function usePagination({
  total,
  pageSize = INITIAL_SIZE,
  defaultCurrent = INITIAL_NUM,
  setPageNum,
  setPageSize,
}: PaginationProps) {
  function onShowSizeChange(current: number, pageSize: number) {
    setPageSize!(pageSize);
  }

  const pagination = {
    showQuickJumper: true,
    total, // 多于一定数量才展示
    defaultCurrent,
    pageSize,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
    showSizeChanger: true,
    onChange: setPageNum,
    onShowSizeChange,
  };

  return {
    pagination,
  };
}

// set
export function useGetSetPagination(initialNum = 1, initialSize = INITIAL_SIZE) {
  const [pageNum, setPageNum] = useState(initialNum);
  const [pageSize, setPageSize] = useState(initialSize);

  const resetPageNum = useCallback(() => {
    setPageNum(INITIAL_NUM);
  }, []);

  const resetPageSize = useCallback(() => {
    setPageSize(INITIAL_SIZE);
  }, []);

  const resetPageOptions = useCallback(() => {
    setPageNum(INITIAL_NUM);
    setPageSize(INITIAL_SIZE);
  }, []);

  return {
    pageNum,
    pageSize,
    resetPageNum,
    resetPageSize,
    resetPageOptions,
    setPageNum,
    setPageSize,
  };
}

export function useCommonListPageFetch<Params, Result>(
  apiFetchFn: (data: Params) => any,
  initSearchParams: any = {},
  initData = {},
) {
  const [searchParams, setSearchParams] = useState<Params>(initSearchParams as Params);
  const [data, setData] = useState<Result>(initData as Result);

  const { pageNum, pageSize, setPageNum, setPageSize, resetPageOptions } = useGetSetPagination(
    initSearchParams.pageNum,
    initSearchParams.pageSize,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const pagination = {
    locale: locale.Pagination,
    showQuickJumper: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    total: data?.total, // 多于一定数量才展示,
    defaultCurrent: INITIAL_NUM,
    pageSize,
    pageNum,
    current: pageNum,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
    showSizeChanger: true,
    showTotal: (total: number) => `共 ${total} 条`,
    onChange: setPageNum,
    onShowSizeChange,
  };

  function onShowSizeChange(current: number, pageSize: number) {
    setPageSize(pageSize);
  }

  function onResetSearchParams() {
    setSearchParams(initSearchParams);
  }

  useEffect(() => {
    async function getList(options: Params, pageNum: number, pageSize: number) {
      setLoading(true);

      try {
        const params = {
          ...options,
          pageSize,
          pageNum,
        };
        const { data } = await apiFetchFn(params);

        setLoading(false);
        setData(data);
      } catch (e) {
        setLoading(false);
        setData(initData as Result);
        console.log(apiFetchFn, e);
      }
    }

    getList(searchParams, pageNum, pageSize);
  }, [searchParams, pageNum, pageSize]);

  const memoSetSearchParams = useCallback(
    // 每次改变搜索参数，重置搜索页为当前页
    (params: Params, isResetPageNum = false) => {
      //NOTE： 重置与否
      if (isResetPageNum && params) {
        resetPageOptions();
      }

      setSearchParams(options => ({ ...options, ...params }));
    },
    [],
  );

  const refreshList = () => {
    setRefresh(!refresh);
  };

  return {
    data,
    pagination,
    searchParams,
    pageNum,
    loading,
    setData,
    onResetSearchParams,
    setSearchParams,
    setPageSize,
    setPageNum,
    memoSetSearchParams,
    refreshList,
    resetPageOptions,
  };
}
