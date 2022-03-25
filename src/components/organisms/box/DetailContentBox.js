import SubTitle from "../../module/text/SubTitle";
import Content from "../../module/text/Content";

const DetailContentBox = ({ content }) => {
  return (
    <section>
      <SubTitle text={"오늘의 기록"} />
      <Content content={content} />
    </section>
  );
};

export default DetailContentBox;
