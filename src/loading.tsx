import "./index.css";

export default function Loading() {
  return (
    <div className="w-screen min-h-screen bg-[#181520] flex items-center justify-center">
      <div className="flex px-8 w-full sm:px-0 sm:w-118 min-h-[50vh] flex-col items-center justify-center">
        <div className="w-full geist-black text-4xl text-start">
          loading the dump...
        </div>
        <div className="w-full text-sm geist-body pt-4 leading-5">
          Articles are on its way :)
        </div>
      </div>
    </div>
  );
}
