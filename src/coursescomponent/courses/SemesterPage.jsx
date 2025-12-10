import { Link, useParams } from "react-router";
import { courseConfig } from "../../utils/courseConfig";

export default function SemesterPage() {
    const { level, semester } = useParams();
    const semesterData = courseConfig[level].semesters[semester];

    return (
        <div>
            <h1>{semesterData.name}</h1>

            {semesterData.courses.map((course) => (
                <Link key={course.id} to={`${course.id}`}>
                    <div className="card">{course.title}</div>
                </Link>
            ))}
        </div>
    );
}
