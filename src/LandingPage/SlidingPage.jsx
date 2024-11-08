import { useEffect, useState } from "react";
function SlidingPage() {
  const [position, setPosition] = useState(100); // Start off-screen
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= window.innerWidth ? -100 : prev - 5)); // Move right
    }, 100); // Update position every 50ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="feedContainer w-full h-min overflow-hidden flex ">
      {/* Scrollable Content */}
      <div className="rum feedContainer flex space-x-8 min-w-fit ">
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white ring-2 ring-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
      </div>
{/* Second  */}

      <div className="rum feedContainer flex space-x-8 min-w-fit ml-4 ">
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ring-2 ring-white">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative ">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
        <div className="w-64 h-[21em] bg-black rounded-3xl overflow-hidden relative">
          <img
            src="src/Images/3ktnbuhr.bmp"
            alt=""
            className=" object-fill h-full opacity-75"
          />
          <div className=" absolute inset-0 text-sm  font-bold top-[74%] left-3 text-white">
            <span>Heyy there</span>
            <br />
            <span>Heyy there</span>
          </div>
          <div className="absolute inset-0 top-[89%] left-3 flex gap-2 text-white font-semibold">
            <div className=" ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              location
            </div>
            <div className="ring-[0.3px] ring-white h-8 min-h-min min-w-min px-2 rounded-xl text-center ">
              category
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlidingPage;
