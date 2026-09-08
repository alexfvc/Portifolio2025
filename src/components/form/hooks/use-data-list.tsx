import type IUseDataList from "./type/i-use-data-list";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { DiaLetivo } from "./type/i-dialetivo";

export default function useDataList(): IUseDataList {
  const [listAllDatas, setListAllDatas] = useState<DiaLetivo[]>([]);
  const [listHeader, setListHeader] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const csvPath = `${import.meta.env.BASE_URL}data/dias_letivos_2025.csv`;

  useEffect(() => {
    Papa.parse<DiaLetivo>(csvPath, {
      header: true,
      download: true,
      delimiter: ",",
      complete: (result) => {
        const dadosTratados = (result.data as DiaLetivo[]).map((item) => ({
          ...item,
          data: item.data ? item.data.replace(/\./g, "/") : item.data,
        }));
        setListAllDatas(dadosTratados);
        if (result.meta.fields) setListHeader(result.meta.fields);
        setIsLoading(false);
      },
      error: () => {
        setIsLoading(false);
      },
    });
  }, []);

  return { listAllDatas, listHeader, isLoading };
}
