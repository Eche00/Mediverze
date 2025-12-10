import { Link, useParams } from "react-router";
import { courseConfig } from "../../utils/courseConfig";

export default function CoursePage() {
    const { level, semester, courseId } = useParams();
    const course = courseConfig[level].semesters[semester].courses.find((c) => c.id === courseId);

    return (
        <div>
            <h1>{course.title}</h1>

            {course.pdfs.map((pdf) => (
                <Link key={pdf.id} to={`${pdf.id}`}>
                    <div className="card">{pdf.title}</div>
                </Link>
            ))}
        </div>
    );
}
