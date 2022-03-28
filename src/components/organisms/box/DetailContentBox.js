import SubTitle from "../../moldecule/text/SubTitle";
import Content from "../../moldecule/text/Content";

const DetailContentBox = ({ content }) => {
  return (
    <section>
      <SubTitle text={"오늘의 기록"} />
      <Content content={content} />
    </section>
  );
};

export default DetailContentBox;
