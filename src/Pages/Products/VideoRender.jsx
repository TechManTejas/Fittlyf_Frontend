import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
export const VideoRender = ({ showvideo, setsw, link }) => {

  return (
    <div>
      {showvideo ? (
        <div className="bg-zinc-500 flex justify-center items-center opacity-100 w-screen h-screen fixed bottom-0 z-40">
          <div className="fixed z-30 flex flex-col items-end">
            <div className="cursor-pointer" onClick={() => setsw(false)}>
              Close <CloseIcon />
            </div>
            <iframe
              className=" h-[550px] sm:h-[254px] sm:w-[450px] lg:h-[480px] lg:w-[854px]"
              src = {showvideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};