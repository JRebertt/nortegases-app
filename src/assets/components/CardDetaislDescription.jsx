export function CardDetailsDescription({ description }) {
  return (
    <>
      <section className="h-64 px-5 border-2 border-brand rounded-lg w-11/12 lg:h-[26rem] sm:px-10">
        {/* Text Description Detail Product  */}
        <h1 className="mb-5 mt-[1.7rem] text-brand-black text-center font-Sora font-bold text-xl">
          Descrição do Produto
        </h1>
        <p className="text-slate-400 text-center text-xs font-Syne font-medium md:text-base">
          {description}
        </p>
      </section>
    </>
  );
}
