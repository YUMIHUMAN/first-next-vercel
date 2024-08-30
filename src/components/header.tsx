import { FC } from "react";
//CSSProperties:TypeScript でインラインスタイルを定義する際の型らしい。
const header_Style: React.CSSProperties = {
  backgroundColor: "#000000", // キャメルケース
  color: "white",
  padding: "1rem",
  textAlign: "center", // キャメルケース
};

const header_h1_Style: React.CSSProperties = {
  margin: 0,
};

const nav_ul_style: React.CSSProperties = {
  listStyle: "none", // 修正済み: キャメルケースと値を文字列で指定
  padding: 0,
};

const nav_ul_li_style: React.CSSProperties = {
  display: "inline", // 修正済み: 値を文字列として指定
  margin: "0 1rem", // 修正済み: 値を文字列として指定
};

const nav_ul_li_a_style: React.CSSProperties = {
  color: "white", // キャメルケースはそのまま
  textDecoration: "none", // 修正済み: キャメルケースと値を文字列で指定
};

const Header: FC = () => {
  return (
    <header style={header_Style}>
      <h1 style={header_h1_Style}>私のポートフォリオ</h1>
      <nav>
        <ul style={nav_ul_style}>
          <li style={nav_ul_li_style}>
            <a href="#about" style={nav_ul_li_a_style}>
              自己紹介
            </a>
          </li>
          <li style={nav_ul_li_style}>
            <a href="#projects" style={nav_ul_li_a_style}>
              プロジェクト
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
