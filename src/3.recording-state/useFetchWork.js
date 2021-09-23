import { useState, useEffect } from "react";
import { parseWork } from "@realsee/five";

/**
 * React Hook: 通过 work.json 的地址 获取 work 对象
 * @param url work.json 的数据地址
 * @returns work 对象，如果获取中，返回 null
 */
 function useFetchWork(url) {
  const [work, setWork] = useState(null);
  useEffect(() => {
    setWork(null);
    fetch(url)
      .then(response => response.text())
      .then(text => setWork(parseWork(text)));
  },[url]);
  return work;
}

export { useFetchWork };