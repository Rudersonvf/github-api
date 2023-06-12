import "./style.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
  <div className="dflex">
    <button type="submit">{text}</button>
  </div>
  );
}
