import { FC } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const section_Style: React.CSSProperties = {
  padding: "2rem",
};

const project: React.CSSProperties = {
  backgroundColor: "#e0e0e0",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "1rem",
  marginBottom: "1rem",
};

const Main: FC = () => {
  return (
    <>
      <Header />
      <section id="about" style={section_Style}>
        <h2>自己紹介</h2>
        <p>菊池裕翔です。盛岡情報ビジネスデザイン専門学校で勉強しています</p>
      </section>

      <section id="projects" style={section_Style}>
        <h2>プロジェクト</h2>
        <div style={project}>
          <h3>クイズゲーム</h3>
          <h3>メモアプリ</h3>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Main;
