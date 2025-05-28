import { Link } from "react-router-dom";
import Errorimg from "../../assets/error.png";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <img
                src={Errorimg}
                alt="404 Not Found"
                className="w-full max-w-md mb-8"
            />
            <div className="flex gap-4">
                <Link
                    to="/"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded shadow"
                >
                    Go Home Page
                </Link>
                <Link
                    to=""
                    onClick={() => window.location.reload()}
                    className="border border-purple-600 text-purple-600 hover:bg-purple-100 font-medium py-2 px-6 rounded shadow"
                >
                    Reload Page
                </Link>
            </div>
        </div>
    );
};

export default Error;