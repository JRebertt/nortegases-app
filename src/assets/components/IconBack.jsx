import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export function IconBack() {
  function handleGoBackProducts() {
    console.log("Voltando para os Produtos");
  }
  return (
    <>
      <div
        className="h-10 mb-5 ml-2 flex justify-start items-center"
        onClick={handleGoBackProducts}
      >
        <ArrowBackIosNewRoundedIcon
          fontSize="large"
          sx={{ color: "#0eb845" }}
        />
        <h1 className="font-Sora font-bold text-xl cursor-pointer">Voltar</h1>
      </div>
    </>
  );
}
