import type IUseDataList from "./type/i-use-data-list";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { DiaLetivo } from "./type/i-dialetivo";

export default function useDataList(): IUseDataList {
  const [listAllDatas, setListAllDatas] = useState<DiaLetivo[]>([]);
  const [listHeader, setListHeader] = useState<string[]>([]);
  const csvPath = `${import.meta.env.BASE_URL}data/dias_letivos_2025.csv`;

  useEffect(() => {
    Papa.parse<DiaLetivo>(csvPath, {
      header: true,
      download: true,
      delimiter: ",",
      complete: (result) => {
        // transforma todos os campos 'data' trocando ponto por barra
        const dadosTratados = (result.data as DiaLetivo[]).map((item) => {
          return {
            ...item,
            // supondo que seu CSV tenha um campo chamado 'data'
            data: item.data ? item.data.replace(/\./g, "/") : item.data,
          };
        });

        setListAllDatas(dadosTratados);

        if (result.meta.fields) setListHeader(result.meta.fields);
      },
    });
  }, []);

  return {
    listAllDatas,
    listHeader,
  };
}
