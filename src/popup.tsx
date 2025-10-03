import "./style.css"
import { useState } from "react"
import { IoIosSettings } from "react-icons/io"
import { MdOutlineCrisisAlert } from "react-icons/md"

function IndexPopup() {
  const [open, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("")
  const [showCurrentPosition, setShowCurrentPosition] = useState(false)
  const [position, setPosition] = useState("")
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setPosition("Geolocation not supported")
      return
    }

    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setPosition(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`)
        setLoading(false)
      },
      (error) => {
        setPosition("Failed to get location")
        setLoading(false)
      }
    )
  }


  if (showCurrentPosition) {
    return (
      <div className="plasmo-w-80 plasmo-min-h-[420px] plasmo-p-4 plasmo-bg-gray-900 plasmo-text-gray-100 plasmo-rounded-xl plasmo-shadow-lg">
       
        <div className="plasmo-flex plasmo-items-center plasmo-gap-3 plasmo-mb-6">
          <button 
            onClick={() => setShowCurrentPosition(false)}
            className="plasmo-p-2 plasmo-bg-gray-800 plasmo-rounded-lg hover:plasmo-bg-gray-700 plasmo-transition-colors"
          >
            ← Back
          </button>
          <h1 className="plasmo-text-xl plasmo-font-bold">📍 Where Am I?</h1>
        </div>

      
        <div className="plasmo-text-center plasmo-mt-8">
          {loading ? (
            <div className="plasmo-text-blue-400 plasmo-text-lg">
              Detecting your location...
            </div>
          ) : position ? (
            <div>
              <div className="plasmo-text-green-400 plasmo-text-xl plasmo-font-bold plasmo-mb-4">
                Your Location:
              </div>
              <div className="plasmo-bg-gray-800 plasmo-rounded-lg plasmo-p-4 plasmo-mb-4 plasmo-font-mono">
                {position}
              </div>
            </div>
          ) : (
            <div className="plasmo-text-gray-400">
              Click below to detect your location
            </div>
          )}

          <button
            onClick={getCurrentLocation}
            disabled={loading}
            className="plasmo-w-full plasmo-bg-blue-600 hover:plasmo-bg-blue-700 plasmo-py-3 plasmo-px-4 plasmo-rounded-lg plasmo-transition-colors plasmo-mt-4"
          >
            {loading ? "Detecting..." : "Detect My Location"}
          </button>
        </div>
      </div>
    )
  }

 
  return (
    <div className="plasmo-w-80 plasmo-min-h-[420px] plasmo-p-4 plasmo-bg-gray-900 plasmo-text-gray-100 plasmo-rounded-xl plasmo-shadow-lg plasmo-relative">
     
      <div className="plasmo-flex plasmo-items-center plasmo-justify-between plasmo-mb-6">
        <h1 className="plasmo-text-xl plasmo-font-bold plasmo-tracking-wide">
          Location Pointer
        </h1>

        <div className="plasmo-relative">
          <button
            onClick={() => setIsOpen(!open)}
            className="plasmo-text-gray-400 hover:plasmo-text-gray-200 plasmo-transition-colors"
          >
            <IoIosSettings size={24} />
          </button>

          {open && (
            <div className="plasmo-absolute plasmo-right-0 plasmo-mt-2 plasmo-w-48 plasmo-bg-gray-800 plasmo-rounded-lg plasmo-shadow-lg plasmo-p-2 z-10">
              <ul className="plasmo-space-y-1">
                <li 
                  onClick={() => {
                    setShowCurrentPosition(true)
                    setIsOpen(false)
                    getCurrentLocation() 
                  }}
                  className="plasmo-px-3 plasmo-py-2 hover:plasmo-bg-gray-700 plasmo-rounded-md plasmo-cursor-pointer plasmo-transition-colors plasmo-flex plasmo-items-center plasmo-gap-2"
                >
                  <span>📍</span>
                  <span>Where am I?</span>
                </li>
                <li className="plasmo-px-3 plasmo-py-2 hover:plasmo-bg-gray-700 plasmo-rounded-md plasmo-cursor-pointer plasmo-flex plasmo-items-center plasmo-gap-2">
                  <span>📏</span>
                  <span>Distance in Km</span>
                </li>
                <li className="plasmo-px-3 plasmo-py-2 hover:plasmo-bg-gray-700 plasmo-rounded-md plasmo-cursor-pointer plasmo-flex plasmo-items-center plasmo-gap-2">
                  <span>⏱️</span>
                  <span>Time may take</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      
      <div className="plasmo-space-y-3 plasmo-mb-6">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-800 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition"
        >
          <option value="" disabled>Select your starting location</option>
          <option value="here">The place I am here!</option>
          <option value="other">Another location</option>
        </select>

        {selected === "other" && (
          <input
            type="text"
            className="plasmo-w-full plasmo-text-center plasmo-text-gray-200 plasmo-bg-gray-700 plasmo-placeholder-gray-500 focus:plasmo-ring-2 focus:plasmo-ring-blue-500 focus:plasmo-outline-none plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition"
            placeholder="Enter your custom place"
          />
        )}

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
        <h2 className="plasmo-font-semibold plasmo-text-gray-300 plasmo-mb-3">
          Recent Searches
        </h2>
        <div className="plasmo-space-y-2 plasmo-text-sm">
          {["Home to work", "Coffee Shop to Park", "Journ to city"].map(
            (item, idx) => (
              <div
                key={idx}
                className="plasmo-w-full plasmo-bg-gray-800 plasmo-rounded-xl plasmo-py-2 plasmo-px-3 plasmo-transition hover:plasmo-bg-gray-700"
              >
                <a
                  href="#"
                  className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-text-blue-400 hover:plasmo-text-blue-300 plasmo-transition-colors"
                >
                  <MdOutlineCrisisAlert /> {item}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default IndexPopup