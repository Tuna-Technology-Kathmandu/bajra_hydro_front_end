import {
    Viewer,
    Worker,
} from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ pdf, setShowPDF }) => {
    const navPluginInstance = pageNavigationPlugin();
    const { GoToPreviousPage, GoToNextPage } = navPluginInstance;

    return (
        <div className="w-full max-w-4xl mx-auto bg-gray-100 rounded-xl p-4 drop-shadow-lg">
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="flex gap-2">
                    <GoToPreviousPage>
                        {(props) => (

                            <button
                                className="!bg-commonblue text-[12px] sm:text-base hover:!bg-hoverblue transition-all duration-300 rounded-md text-white px-3 py-1 cursor-pointer disabled:opacity-50"
                                onClick={props.onClick}
                                disabled={props.isDisabled}
                            >
                                Prev
                            </button>
                        )}
                    </GoToPreviousPage>
                    <GoToNextPage>
                        {(props) => (
                            <button
                                className="!bg-commonblue text-[12px] sm:text-base hover:!bg-hoverblue transition-all duration-300 rounded-md text-white px-3 py-1 cursor-pointer disabled:opacity-50"
                                onClick={props.onClick}
                                disabled={props.isDisabled}
                            >
                                Next
                            </button>
                        )}
                    </GoToNextPage>
                </div>
                <button
                    className='bg-commonblue text-[12px] sm:text-base hover:bg-hoverblue transition-all duration-300 rounded-md text-white px-3 py-1 cursor-pointer'
                    onClick={() => setShowPDF(false)}
                >
                    Close
                </button>
            </div>

            {/* Viewer */}
            <div className="border-2 border-gray-300 rounded-xl overflow-hidden h-[75vh]">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdf} plugins={[navPluginInstance]} />
                </Worker>
            </div>
        </div>
    );
};

export default PDFViewer;
