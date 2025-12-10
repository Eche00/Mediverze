import { Link, useParams } from "react-router";
import { courseConfig } from "../../utils/courseConfig";

export default function LevelPage() {
  const { level } = useParams();
  const levelData = courseConfig[level];

  return (
    <div>
      <h1>{levelData.name}</h1>

      {Object.keys(levelData.semesters).map((sem) => (
        <Link key={sem} to={`${sem}`}>
          <div className="card">{levelData.semesters[sem].name}</div>
        </Link>
      ))}
    </div>
  );
}
