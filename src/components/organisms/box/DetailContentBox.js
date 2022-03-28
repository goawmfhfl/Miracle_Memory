import SubTitle from "../../molecule/text/SubTitle";
import Content from "../../molecule/text/Content";

const DetailContentBox = ({ content }) => {
  return (
    <section>
      <SubTitle text={"오늘의 기록"} />
      <Content content={content} />
    </section>
  );
};

export default DetailContentBox;
