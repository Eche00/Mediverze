import { useParams } from "react-router";
import { courseConfig } from "../../utils/courseConfig";

export default function PdfViewer() {
    const { level, semester, courseId, pdfId } = useParams();
    const course = courseConfig[level].semesters[semester].courses
        .find((c) => c.id === courseId);

    const pdf = course.pdfs.find((p) => p.id === pdfId);
    console.log(pdf.url);

    return (
        <div className="py-4">
            <iframe
                src={`${pdf.url}`} // PDF in public folder
                className="w-full min-h-[50vh] rounded-xl border"
                title="PDF Viewer"
            >
                <p className="text-center text-gray-700 mt-4">
                    PDF cannot be displayed.{" "}
                    <a
                        href={`${pdf.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Download it here
                    </a>
                    .
                </p>
            </iframe>
            <embed
                src="/INTRODUCTION.pdf"
                type="application/pdf"
                className="w-full min-h-screen"
            />
            <object
                data={`/INTRODUCTION.pdf`} // PDF in public folder
                type="application/pdf"
                className="w-full min-h-screen border-2 border-gray-300 rounded-xl shadow-lg"
            >
                <p className="text-center text-gray-700 mt-4">
                    PDF cannot be displayed.{" "}
                    <a
                        href={`/INTRODUCTION.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Download it here
                    </a>
                    .
                </p>
            </object>


        </div>
    );
}
