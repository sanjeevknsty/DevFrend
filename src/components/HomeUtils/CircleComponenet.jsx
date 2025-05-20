import { Box } from "@mui/material";

const CircleComponent = (topW,topH,bottom) => {
  return (
    <>
      <Box
        sx={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          backgroundColor: "oklch(.552 .016 285.938)",
          position: "absolute",
          top: -200,
          right: -200,
          opacity:0.5,
        //   position: "fixed",
          margin: "20px",
        //   zIndex: 999,
        }}
      />

      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "oklch(.552 .016 285.938)",
          position: "absolute",
          bottom: -100,
          right: -100,
          opacity:0.5,
          margin: "20px",
        //   position: "fixed",
        //   zIndex: 999,
        }}
      />
    </>
  );
};

export default CircleComponent;
