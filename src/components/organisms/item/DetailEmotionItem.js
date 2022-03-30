import SubTitle from "../../atom/text/SubTitle";
import DetailEmotionBox from "../../molecule/detail/DetailEmotionBox";

const DetailEmotionItem = ({ id, img, descript }) => {
  return (
    <section>
      <SubTitle text={"오늘의 감정"} />
      <DetailEmotionBox id={id} img={img} descript={descript} />
    </section>
  );
};

export default DetailEmotionItem;
