"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = useCallback(
    (params: URLSearchParams) => {
      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router],
  );

  const get = useCallback(
    (key: string) => {
      return searchParams.get(key);
    },
    [searchParams],
  );

  const set = useCallback(
    (key: string, value: string | number | boolean | string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      if (Array.isArray(value)) {
        if (value.length) {
          params.set(key, value.join("-"));
        } else {
          params.delete(key);
        }
      } else if (
        value === "" ||
        value === null ||
        value === undefined ||
        value === false
      ) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }

      update(params);
    },
    [searchParams, update],
  );

  const remove = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.delete(key);

      update(params);
    },
    [searchParams, update],
  );

  const clear = useCallback(() => {
    router.replace(pathname, {
      scroll: false,
    });
  }, [pathname, router]);

  const has = useCallback(
    (key: string) => {
      return searchParams.has(key);
    },
    [searchParams],
  );

  const getArray = useCallback(
    (key: string) => {
      const value = searchParams.get(key);

      return value ? value.split("-") : [];
    },
    [searchParams],
  );

  const setMany = useCallback(
    (values: Record<string, string | number | boolean | string[]>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.length ? params.set(key, value.join("-")) : params.delete(key);
        } else if (
          value === "" ||
          value === null ||
          value === undefined ||
          value === false
        ) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      update(params);
    },
    [searchParams, update],
  );

  const removeMany = useCallback(
    (keys: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      keys.forEach((key) => params.delete(key));

      update(params);
    },
    [searchParams, update],
  );
  return {
    searchParams,
    get,
    getArray,
    set,
    remove,
    clear,
    has,
    setMany,
    removeMany,
  };
};
