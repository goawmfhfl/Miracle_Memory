import DetailContentBox from "../../molecule/detail/DetailContentBox";
import SubTitleBox from "../../molecule/common/SubTitleBox";

const DetailContentItem = ({ content }) => {
  return (
    <section>
      <SubTitleBox
        text={"미라클 일기"}
        icon={process.env.PUBLIC_URL + `/assets/icon/edit.svg`}
        mb={16}
      />
      <DetailContentBox content={content} />
    </section>
  );
};

export default DetailContentItem;
