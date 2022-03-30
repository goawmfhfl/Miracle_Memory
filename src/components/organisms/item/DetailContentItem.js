import SubTitle from "../../atom/text/SubTitle";
import DetailContentBox from "../../molecule/detail/DetailContentBox";

const DetailContentItem = ({ content }) => {
  return (
    <section>
      <SubTitle text={"오늘의 기록"} />
      <DetailContentBox content={content} />
    </section>
  );
};

export default DetailContentItem;
