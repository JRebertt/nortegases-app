export function MenuOptions({ name }) {
  return (
    <>
      <div className="w-11/12 h-16 border-b-2 my-5 cursor-pointer hover:bg-brand rounded-sm">
        <h2 className="text-center pt-5 text-base font-Sora font-medium">
          {name}
        </h2>
      </div>
    </>
  );
}
