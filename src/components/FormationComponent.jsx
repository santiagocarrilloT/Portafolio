export function FormationComponent({
  Icon,
  linkAcademic,
  titleAcademic,
  educativeCenter,
  description,
}) {
  return (
    <div className="follow-card-formation-area">
      <a target="_blank" href={`${linkAcademic}`}>
        <button className="follow-card-formation-span">
          <div className="follow-card-formation-div">
            <Icon />
          </div>
        </button>
      </a>
      <div className="follow-card-formation-info">
        <span>
          <strong>{titleAcademic}</strong>
        </span>
        <p className="follow-card-formation-educativeCenter">
          {educativeCenter}
        </p>
        <p className="follow-card-formation-description">{description}</p>
      </div>
    </div>
  );
}
