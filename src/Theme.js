import { createTheme,responsiveFontSizes } from "@mui/material";

const Theme = responsiveFontSizes(createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#506b6a',
      },
      secondary: {
        main: '#007779',
      },
      warning: {
        main: '#0f87ff',
      },
    },
    typography: {
      fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      h1: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 700,
        letterSpacing: ".1px",
        fontStyle: "normal",
        
      },

      h2: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        
      },
      h3: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "30px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        
     
      },
      h4: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "28px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        
        
      },
      h5: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "24px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
      
        
        
      },
      h6: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "24px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        
        
        
      },
      inherit: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
        
        
        
      },

      body1: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0.1px",
        fontStyle: "normal",
      
      },
      body2: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
        fontSize: "32px",
        fontWeight: 600,
        letterSpacing: "0.1px",
        fontStyle: "normal",
      
      },
      button: {
        fontFamily: 'Lato, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
      },
    },
  }));
  
  
  export default  Theme;