import Image from "next/image";

export default function Home() {
  const shouldAdd = () => {
    let status: boolean;
    const x = Math.floor(Math.random() * 2);
    x === 1 ? (status = true) : (status = false);
    console.log(x, status)
    return status;
  };

  const moveButton = () => {
    let btn = document.getElementById("noButton");
    if (btn) {
      // console.log(btn.offsetLeft);
      const xCoords = Number(btn.style.left.slice(0, -2));
      const yCoords = Number(btn.style.top.slice(0, -2));

      const xShouldAdd = shouldAdd();
      const yshouldAdd = shouldAdd();

      xShouldAdd === true || xCoords + 50 < 1920
        ? (btn.style.left = `${xCoords + 50}px`)
        : (btn.style.right = `${xCoords + 50}px`);
      // console.log(Number(leftInt))

      xShouldAdd == false || xCoords - 50 > 0
        ? (btn.style.left = `${xCoords - 50}px`)
        : (btn.style.right = `${xCoords - 50}px`);

      yshouldAdd === true || yCoords + 50 < 1920
        ? (btn.style.top = `${yCoords + 50}px`)
        : (btn.style.bottom = `${yCoords + 50}px`);
      // console.log(Number(leftInt))

      yshouldAdd == false || yCoords - 50 > 0
        ? (btn.style.top = `${yCoords - 50}px`)
        : (btn.style.bottom = `${yCoords - 50}px`);

      console.log(btn.style.left);
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
          className="w-[700px]"
          id="wannafuck"
        />
        <div className="flex justify-evenly pt-5 font-semibold text-xl text-white">
          <button
            className="rounded-full bg-violet-900 w-[80px] h-[50px] outline-none hover:text-violet-900 hover:bg-white
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
    </div>
  );
}
