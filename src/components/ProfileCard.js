import SkillSet from "./SkillSet";

function ProfileCard({ skills }) {
  console.log(skills);
  const style = { width: "23rem", border: "3px solid black" };
  return (
    <div className="card" style={style}>
      <div style={{ width: "23rem" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div style={{ padding: "0.5rem 2rem" }}>
        <div>
          <h2 style={{ fontFamily: "sans-serif" }}>Siddhanth Chauhan</h2>
          <p
            style={{
              fontFamily: "sans-serif",
              lineHeight: "22px",
              letterSpacing: "1px",
            }}
          >
            The Material Design responsive layout grid adapts to screen size and
            orientation, ensuring consistency across layouts.The Material Design
            responsive layout grid adapts to screen size and orientation,
            ensuring consistency across layouts.
          </p>
        </div>
        <div>
          {skills.map(function (skill) {
            return <SkillSet skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
