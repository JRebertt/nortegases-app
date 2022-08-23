export function Card({ name, imgUrl }) {
  return (
    <>
      <button className="w-60 h-80 bg-white p-5 rounded-lg shadow-xl text-center">
        <div className="w-50 h-40 flex justify-center">
          <img src={imgUrl} alt={name} className="w-50 h-40" />
        </div>

        <div className="mt-5 border-b-2 bg-gray-500"></div>
        <h1 className="text-brand-black mt-6 text-center font-Sora font-bold text-xl">
          {name}
        </h1>
      </button>
    </>
  );
}
