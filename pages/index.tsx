import Image from "next/image";

export default function Home() {
  const shouldAdd = () => {
    let status: boolean;
    Math.floor(Math.random() * 2) === 1 ? (status = true) : (status = false);
    return status;
  };

  const yesFunction = () => {
    const element = document.getElementById("wearcondom");
    element ? element.style.display = "inline" : null
  };

  const moveButton = () => {
    const noBtn = document.getElementById("noButton");
    const yesBtn = document.getElementById("yesButton");
    const gif = document.getElementById("gifArea");

    if (noBtn) {
      const xCoords = Number(noBtn.style.left.slice(0, -2));
      const yCoords = Number(noBtn.style.top.slice(0, -2));

      const xShouldAdd = shouldAdd();
      const yShouldAdd = shouldAdd();

      if (xShouldAdd === true) {
        if (noBtn.offsetLeft + (50 + noBtn.offsetWidth) < 1920) {
          noBtn.style.left = `${xCoords + 50}px`;
        } else {
          noBtn.style.left = `${xCoords - 50}px`;
        }
      } else {
        if (noBtn.offsetLeft - (50 + noBtn.offsetWidth) > -80) {
          noBtn.style.left = `${xCoords - 50}px`;
        } else {
          noBtn.style.left = `${xCoords + 50}px`;
        }
      }

      if (yShouldAdd) {
        if (noBtn.offsetTop + (50 + noBtn.offsetHeight) < 930) {
          noBtn.style.top = `${yCoords + 50}px`;
        } else {
          noBtn.style.top = `${yCoords - 50}px`;
        }
      } else {
        if (noBtn.offsetTop - (50 + noBtn.offsetHeight) > -50) {
          noBtn.style.top = `${yCoords - 50}px`;
        } else {
          noBtn.style.top = `${yCoords + 50}px`;
        }
      }
      console.log(noBtn.offsetTop);
    }
  };

  return (
    <div className="w-screen h-screen bg-violet-400 flex justify-center">
      <div className="py-10">
        <Image
          height={1080}
          width={1920}
          src="/wannafuck.gif"
          alt="wanna fuck ?"
          className="w-[700px] rounded"
          id="gifArea"
        />
        <div className="flex justify-evenly pt-5 font-semibold text-xl text-white">
          <button
          onClick={() => yesFunction()}
            id="yesButton"
            className="animate-bounce rounded-full bg-violet-900 w-[80px] h-[50px] outline-none hover:text-violet-900 hover:bg-white
          transition duration-300 ease-linear relative"
          >
            Yes
          </button>
          <button
            id="noButton"
            onMouseOver={() => moveButton()}
            className="rounded-full bg-violet-900 w-[80px] h-[50px] outline-none hover:text-violet-900 hover:bg-white
          transition duration-300 ease-linear relative"
          >
            No
          </button>
        </div>
      </div>
      <Image
        height={1080}
        width={1920}
        src="/wearcondom.png"
        alt="wear a condom"
        className="absolute w-screen h-screen"
        style={{ display: "none" }}
        id="wearcondom"
      />
    </div>
  );
}
