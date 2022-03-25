import EditEmotion from "../../module/emotion/EditEmotion";

const EditEmotionBox = ({
  emotion_descript,
  emotion_id,
  emotion_img,
  isSelected,
  onClick,
}) => {
  return (
    <section>
      <EditEmotion
        id={emotion_id}
        img={emotion_img}
        descript={emotion_descript}
        onClick={onClick}
        isSelected={isSelected}
      />
    </section>
  );
};

export default EditEmotionBox;
