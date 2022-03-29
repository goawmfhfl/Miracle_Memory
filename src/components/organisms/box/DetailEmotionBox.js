import SubTitle from "../../molecule/text/SubTitle";
import DetailEmotion from "../../molecule/emotion/DetailEmotion";

const DetailEmotionBox = ({ id, img, descript }) => {
  return (
    <section>
      <SubTitle text={"오늘의 감정"} />
      <DetailEmotion id={id} img={img} descript={descript} />
    </section>
  );
};

export default DetailEmotionBox;
