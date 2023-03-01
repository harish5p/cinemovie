import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";



export const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 Page Not Found - CineMovie"
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>


        </div>


        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-800 via-purple-800 to-red-800 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back to CineMovie</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
