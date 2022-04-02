import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { DataGrid } from "@mui/x-data-grid";
import Currency from "components/currency";

const rows = [
    { id: 1, col1: "Nil", col2: "Upto 2.5 Lakhs", col3: "Nil" },
    { id: 2, col1: "5%", col2: "2.5 Lakh to 5 Lakh", col3: "5%" },
    { id: 3, col1: "20%", col2: "5 Lakh to 7.5 Lakh", col3: "10%" },
    { id: 4, col1: "20%", col2: "7.5 Lakh to 10 Lakh", col3: "15%" },
    { id: 5, col1: "30%", col2: "10 Lakh to 12.5 Lakh", col3: "20%" },
    { id: 6, col1: "30%", col2: "12.5 Lakh to 15 Lakh", col3: "25%" },
    { id: 7, col1: "30%", col2: "Above 15 Lakh", col3: "30%" },
];

const columns = [
    {
        field: "col1",
        headerName: "Old Regime",
        width: 150,
        sortable: false,
    },
    {
        field: "col2",
        headerName: "Annual Income",
        width: 200,
        sortable: false,
    },
    {
        field: "col3",
        headerName: "New Regime",
        width: 150,
        sortable: false,
    },
];

function getSlabId(value) {
    if (value <= 250000 && value) return [1];
    else if (value > 250000 && value <= 500000) return [2];
    else if (value > 500000 && value <= 750000) return [3];
    else if (value > 750000 && value <= 1000000) return [4];
    else if (value > 1000000 && value <= 1250000) return [5];
    else if (value > 1250000 && value <= 1500000) return [6];
    else if (value > 1500000) return [7];
    return [];
}

function TaxLayout() {
    const [values, setValues] = React.useState({
        amount: "",
    });

    const [selectionModel, setSelectionModel] = React.useState([]);

    const handleChange = (prop) => (event) => {
        const value = Number(event.target.value);
        setSelectionModel(getSlabId(value));
        setValues({ ...values, [prop]: value });
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Currency
                    label="Amount"
                    value={values.amount}
                    handleChange={handleChange}
                    startAdornment="Rs."
                />
            </Grid>
            <Grid item xs={12}>
                <div style={{ width: "30rem" }}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        hideFooterPagination
                        hideFooter
                        disableColumnMenu
                        disableExtendRowFullWidth
                        selectionModel={selectionModel}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default TaxLayout;
