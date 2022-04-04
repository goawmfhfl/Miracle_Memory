import SubTitleBox from "../../molecule/common/SubTitleBox";
import DetailEmotionBox from "../../molecule/detail/DetailEmotionBox";

const DetailEmotionItem = ({ id, img, descript }) => {
  return (
    <section>
      <SubTitleBox
        text={"오늘의 감정"}
        icon={process.env.PUBLIC_URL + `/assets/icon/smile.svg`}
        mb={0}
      />
      <DetailEmotionBox id={id} img={img} descript={descript} />
    </section>
  );
};

export default DetailEmotionItem;
