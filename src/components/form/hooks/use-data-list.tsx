import type IUseDataList from "./type/i-use-data-list";
import { useEffect, useState } from "react";
import Papa from "papaparse";


export default function useDataList() : IUseDataList{
    const [listAllDatas, setListAllDatas] = useState<Array<string>>();

    useEffect(() => {
    Papa.parse("/data/dias_letivos_2025.csv", {
        
        download: true,
        header: true,
        complete: (result) => {
        console.log("CSV bruto:", result.data);
        const flattened = result.data.flat() as string[];
        console.log("CSV transformado em array de strings:", flattened);
        setListAllDatas(flattened);
        },
    });
    }, []);

    console.log("Estado atualizado:", listAllDatas);

    return {
        listAllDatas, 
    };
}