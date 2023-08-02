function SkillSet(props) {
  console.log(props.skill.skill);
  return (
    <>
      <button
        style={{
          outline: "none",
          border: "none",
          padding: "5px 10px",
          margin: "8px 8px 8px 0px",
          borderRadius: "6px",
          fontWeight: "bold",
          backgroundColor: props.skill.color,
        }}
      >
        {props.skill.skill}
        {props.skill.level === "advanced"
          ? "💪"
          : props.skill.level === "beginner"
          ? "👶"
          : "👍"}
      </button>
    </>
  );
}

export default SkillSet;
