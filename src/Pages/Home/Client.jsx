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
    <div style={{ color: "#2e2e2f", fontFamily: "Maharlika" }}>
      <h1 className="p-4 text-2xl">What Our Clients Say</h1>
      <div>
        {data.map((e) => {
          return (
            <section className="py-5">
              <div className="flex flex-col items-center">
                <p className="w-11/12">{e.desc}</p>
              </div>

              <div className="pl-6 pt-6 text-xl">{e.name}</div>
              <div className="pl-6 text-xl">{e.age}</div>
              <div className="pl-7"><div className="border-b w-1/6 border-black pt-6"></div></div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
