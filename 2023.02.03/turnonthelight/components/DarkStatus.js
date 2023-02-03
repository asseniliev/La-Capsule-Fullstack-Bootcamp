import { useSelector } from "react-redux";

function DarkStatus() {
  const isDark = useSelector((state) => state.dark.value);
  let onOff = "";
  let color = "";

  if (isDark) {
    onOff = "off";
    color = "#FFFFFF";
  } else {
    onOff = "on";
    color = "#000000";
  }

  return (
    <div>
      <p style={{ color: color }}>Light is {onOff}?</p>
    </div>
  );
}

export default DarkStatus;
