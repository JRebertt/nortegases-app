export function CardDetailsProduct({ name, imgUrl }) {
  return (
    <>
      <section className="w-10/12 h-80 grid grid-rows-2 gap-y-8 justify-items-center lg:h-[30rem] lg:gap-[15.5rem]">
        {/* Wrapper */}
        <div className="w-64 h-40 lg:w-96 lg:h-80 flex justify-center items-center p-2 border-2 border-brand rounded-lg">
          {/* Content detail image product */}
          <img
            className="object-cover object-center w-40 h-32 lg:w-80 lg:h-64 "
            src={imgUrl}
            alt="Imagem do Produto"
          />
        </div>

        <div className="h-5">
          {/* Text Detail of Product */}
          <h1 className="text-brand-black text-center font-Sora font-bold text-xl pb-2">
            {name}
          </h1>
          <p className="text-brand text-sm sm:text-md font-Syne font-medium">
            lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div>
      </section>
    </>
  );
}
