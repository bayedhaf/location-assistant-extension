import "./style.css";
import { useState } from "react"
import { IoIosSettings } from "react-icons/io"
import { MdOutlineCrisisAlert } from "react-icons/md"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
  <div className="plasmo-w-80 plasmo-min-h-[420px] plasmo-p-4 plasmo-bg-gray-900 plasmo-text-gray-100 plasmo-rounded-xl plasmo-shadow-lg plasmo-relative">
     
      <div className="plasmo-flex plasmo-items-center plasmo-justify-between plasmo-mb-6">
        <h1 className="plasmo-text-xl plasmo-font-bold plasmo-tracking-wide">Location Pointer</h1>
        <a
          href="#"
          className="plasmo-text-gray-400 hover:plasmo-text-gray-200 plasmo-transition-colors"
        >
          <IoIosSettings size={24} />
        </a>
      </div>


      <div className="plasmo-space-y-3 plasmo-mb-6">
        <input
          type="text"
          className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition"
          placeholder="Starting point/place"
        />
        <input
          type="text"
          className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition"
          placeholder="Destination point/place"
        />
      </div>


  <button className="plasmo-w-full plasmo-bg-blue-600 hover:plasmo-bg-blue-700 active:plasmo-scale-[0.98] plasmo-transition plasmo-text-white plasmo-font-semibold plasmo-py-2 plasmo-rounded-2xl plasmo-shadow-md plasmo-mb-6">
        Go to record!
      </button>


      <div>
        <h2 className="plasmo-font-semibold plasmo-text-gray-300 plasmo-mb-3">Recent Searches</h2>
        <div className="plasmo-space-y-2 plasmo-text-sm">
         <div className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition">
           <a
            href="#"
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-text-blue-400 hover:plasmo-text-blue-300 plasmo-transition-colors"
          >
            <MdOutlineCrisisAlert /> Home to work
          </a>
         </div>
        <div className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition">
            <a
            href="#"
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-text-blue-400 hover:plasmo-text-blue-300 plasmo-transition-colors"
          >
            <MdOutlineCrisisAlert /> Coffee Shop to Park
          </a>
        </div>
         <div className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition">
           <a
            href="#"
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-text-blue-400 hover:plasmo-text-blue-300 plasmo-transition-colors"
          >
            <MdOutlineCrisisAlert /> Journ to city
          </a>
         </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
