export default function Card(props: {
  title: string;
  category: string;
  image: string;
  bgColor: string;
  textColor: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border border-white/29 rounded-sm w-full flex flex-col sm:flex-row geist-bold text-lg p-4 bg-[#3B3462]">
      <div className="flex-1 pr-0 sm:pr-5 flex flex-col">
        <div className="geist-bold text-2xl">{props.title}</div>
        <div
          className="geist-body text-xs leading-4"
          style={{ color: props.textColor }}
        >
          {props.children}
        </div>
        <div className="flex flex-row pt-2 h-full items-end">
          <div className="flex-initial text-sm text-decoration-line geist-bold">
            Read
          </div>
          <div
            className="flex-1 text-xs text-right geist-bold"
            style={{ color: props.textColor }}
          >
            {props.category}
          </div>
        </div>
      </div>
      <img
        className="w-full h-30 pt-4 sm:pt-0 sm:w-auto sm:h-40 object-cover"
        src={props.image}
      />
    </div>
  );
}
