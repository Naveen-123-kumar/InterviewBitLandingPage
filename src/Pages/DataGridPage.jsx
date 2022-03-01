import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";

const rows = [
  {
    id: 1,
    username: "@MUI",
    age: 20,
  },
  {
    id: 2,
    username: "React",
    age: 20,
  },
];
const DataGridPage = () => {
  return (
    <Container Container maxWidth='lg'>
      <Box style={{ height: 250, width: "100%" }} pt={'2px'}>
        <DataGrid sx={{m:10}}
          columns={[
            {
              field: "id",
              flex: 1,
              minWidth: 150,
            },
            {
              field: "username",
              width: 200,
            },
            {
              field: "age",
              flex: 0.3,
              minWidth: 50,
            },
          ]}
          rows={rows}
        />
      </Box>
    </Container>
  );
};

export default DataGridPage;
