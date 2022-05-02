import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import * as utils from '@/helpers/utils'
import DataTable from "@/components/DataTable";
import { Box, Paper } from '@mui/material';


export default function CryptosExchanges(data) {
    const [dataTodasCryptos, setDataTodasCryptos] = useState([]);
    const { themeColor } = useContext(ThemeContext); //Coletando estado de preferência da cor padrão do tema.

    useEffect(() => {
        setDataTodasCryptos(data.data.data.data)
    }, [])

    const columnsTodasCryptos = [
        {
            field: "id",
            headerName: "SIGLA CRYPTO",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>SIGLA CRYPTO</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_compra_binance",
            headerName: "BINANCE COMPRA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>BINANCE COMPRA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_venda_binance",
            headerName: "BINANCE VENDA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>BINANCE VENDA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_compra_brasil_bitcoin",
            headerName: "BRASIL BITCOIN COMPRA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>BRASIL BITCOIN COMPRA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_venda_brasil_bitcoin",
            headerName: "BRASIL BITCOIN VENDA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>BRASIL BITCOIN VENDA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_compra_novadax",
            headerName: "NOVADAX COMPRA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>NOVADAX COMPRA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_venda_novadax",
            headerName: "NOVADAX VENDA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>NOVADAX VENDA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_compra_mercado_bitcoin",
            headerName: "MERCADO BITCOIN COMPRA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>MERCADO BITCOIN COMPRA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "vl_venda_mercado_bitcoin",
            headerName: "MERCADO BITCOIN VENDA",
            renderHeader: (params) => <strong style={{color: themeColor.mainText}}>MERCADO BITCOIN VENDA</strong>,
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
    ];

    const rowsTodasCryptos = dataTodasCryptos.map((row) => {
        return {
            id: Object.keys(row)[0],
            vl_compra_binance: utils.render_valor(row[Object.keys(row)[0]][0]['vl_compra']),
            vl_venda_binance: utils.render_valor(row[Object.keys(row)[0]][0]['vl_venda']),
            vl_compra_brasil_bitcoin: utils.render_valor(row[Object.keys(row)[0]][1]['vl_compra']),
            vl_venda_brasil_bitcoin: utils.render_valor(row[Object.keys(row)[0]][1]['vl_venda']),
            vl_compra_novadax: utils.render_valor(row[Object.keys(row)[0]][2]['vl_compra']),
            vl_venda_novadax: utils.render_valor(row[Object.keys(row)[0]][2]['vl_venda']),
            vl_compra_mercado_bitcoin: utils.render_valor(row[Object.keys(row)[0]][3]['vl_compra']),
            vl_venda_mercado_bitcoin: utils.render_valor(row[Object.keys(row)[0]][3]['vl_venda']),
        };
    });

    return (
       
        <Paper variant="outlined" sx={{width: '100%', border: `1px solid ${themeColor.bababa}`}}>
            <DataTable
                rows={rowsTodasCryptos}
                columns={columnsTodasCryptos}>
            </DataTable>
        </Paper>
        
    );
}

export async function getServerSideProps() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_DENARIOS_URL}/api/exchanges`);
    const json = await res.json();
    return {
        props: {
            data: json
        }
    }
}
