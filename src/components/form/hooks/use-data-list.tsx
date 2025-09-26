import type IUseDataList from "./type/i-use-data-list";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { DiaLetivo } from "./type/i-dialetivo";

export default function useDataList(): IUseDataList {
  const [listAllDatas, setListAllDatas] = useState<DiaLetivo[]>([]);
  const csvPath = `${import.meta.env.BASE_URL}data/dias_letivos_2025.csv`;

  useEffect(() => {
    Papa.parse<DiaLetivo>(csvPath, {
      header: true,
      download: true,
      complete: (result) => {
        setListAllDatas(result.data as DiaLetivo[]);
      },
    });
  }, []);
console.log("listalldatas:",listAllDatas)

  return {
    listAllDatas,
  };
}