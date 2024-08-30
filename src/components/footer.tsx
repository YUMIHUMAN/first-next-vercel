import { FC } from "react";

const footer_Style: React.CSSProperties = {
  backgroundColor: "#000000", // キャメルケースと文字列で指定
  color: "white", // 文字列で指定
  textAlign: "center", // キャメルケースと文字列で指定
  padding: "1rem", // 文字列で指定
  width: "100%", // 文字列で指定
};

const Footer: FC = () => {
  return (
    <div style={footer_Style}>
      <p>&copy; 2024 Morijyobi-studio.</p>
    </div>
  );
};

export default Footer;
