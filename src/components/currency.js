import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

function Currency({ label, value, handleChange, startAdornment }) {
    return (
        <FormControl
            sx={{
                m: 1,
                width: "25rem",
            }}
        >
            <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                value={value}
                onChange={handleChange("amount")}
                startAdornment={
                    <InputAdornment position="start">
                        {startAdornment}
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
}

export default Currency;
