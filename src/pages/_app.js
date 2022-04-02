import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "components/header";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="100vw">
                    <Box height="100vh">
                        <Component {...pageProps} />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
