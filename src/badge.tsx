export default function Badge(props: {
  name: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`flex-initial w-min text-black p-2`}
      style={{ backgroundColor: props.bgColor }}
    >
      <p className="geist-bold" style={{ color: props.textColor }}>
        {props.name}
      </p>
    </div>
  );
}
