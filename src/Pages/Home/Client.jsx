export const Client = () => {
  const data = [
    {
      desc: "Got my first period after 11 months. Had been diagnosed at a very early age and tried everything. Finally tried YOSHA, first period after 40 days of taking it. Very happy with the results",
      name: "SHAMBHAVI,",
      age: "27",
    },
    {
      desc: "Got my first PMS cramp and hoping to have my period in the next 3 days after 4 months. Very hopeful and happy today.",
      name: "SHEENA,",
      age: "24",
    },
    {
      desc: "My daughter finally started losing weight and having regular periods after 2 years of PCOD. Would definitely recommend it.",
      name: "PROFI,",
      age: "MOTHER TO 15 YEAR OLD",
    },
  ];

  return (
    <div className="lg:flex lg:justify-center lg:mb-10" style={{ color: "#2e2e2f", fontFamily: "Maharlika" }}>
      <div className="">
        <h1 className="p-4 text-3xl
        sm:text-5xl
        lg:my-4
        xl:my-6
        2xl:my-8
      ">What Our Clients Say</h1>
        <div className="lg:flex">
          {data.map((e) => {
            return (
              <div className="p-5 
                lg:w-[350px]
                xl:w-[375px]
                2xl:w-[400px]
              ">
                <div className="">
                  <p className=" text-lg">"{e.desc}"</p>
                </div>

                <div className="pb-5 pt-1">
                  <div className="text-xl">{e.name}</div>
                  <div className="text-xl">{e.age}</div>
                </div>

                <div className=""><div className="border-b w-2/6 border-black"></div></div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
