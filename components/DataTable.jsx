import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; 
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import {
  DataGrid,
  ptBR,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";


export default function DataTable(props) {

  const { themeColor } = useContext(ThemeContext); //Coletando estado de preferência da cor padrão do tema.

  function CustomToolbar() {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mb: 2,
          mr: 2,
          mt: 2,
          
        }}
      >
        <GridToolbarContainer>
          <GridToolbarColumnsButton
            sx={{
              color: themeColor.secondaryText,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
          <GridToolbarFilterButton
          sx={{
            color: themeColor.secondaryText,
            "&:hover": {
              cursor: "pointer",
            },
          }} />
          <GridToolbarDensitySelector 
          sx={{
            color: themeColor.secondaryText,
            "&:hover": {
              cursor: "pointer",
            },
          }}/>
          <GridToolbarExport 
          sx={{
            color: themeColor.secondaryText,
            "&:hover": {
              cursor: "pointer",
            },
          }}/>
        </GridToolbarContainer>
      </Box>
    );
  }

  return (
    <Box sx={{background: themeColor.backgroundSecondary}}>
      <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
        {props.title}
      </Typography>
      <DataGrid
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rows={props.rows}
        columns={props.columns}
        pageSize={13}
        autoPageSize={true}
        autoHeight={true}
        components={{
          Toolbar: CustomToolbar,
        }}
        disableColumnMenu
        sx={{border: 'none'}}
        disableColumnResize={true}
      />
    </Box>
  );
}