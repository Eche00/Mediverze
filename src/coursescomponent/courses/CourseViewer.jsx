import { useParams } from "react-router";

function CourseViewer() {
    const { level, courseId } = useParams();

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">
                {courseId.toUpperCase()} - {level} Level
            </h1>

            <iframe
                src={`/pdfs/${courseId}.pdf`}
                className="w-full min-h-[90vh] border rounded-xl"
                title="Course PDF"
            ></iframe>
        </div>
    );
}

export default CourseViewer;
