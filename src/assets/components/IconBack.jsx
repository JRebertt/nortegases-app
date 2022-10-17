import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export function IconBack() {
  return (
    <>
      <div className="h-10 mb-5 ml-2 flex justify-start items-center cursor-pointer">
        <ArrowBackIosNewRoundedIcon
          fontSize="large"
          sx={{ color: "#0eb845" }}
        />
        <h1 className="font-Sora font-bold text-xl ">Voltar</h1>
      </div>
    </>
  );
}
