const Home = () => {
  async function create(formData: FormData) {
    "use server";

    const name = formData.get("name");

    if (name && name.toString().trim() !== "") {
      console.log(`Name: ${name}`);
    } else {
      console.log("กรุณากรอกข้อความ");
    }
  }
  return (
    <>
      <div className="container px-48 mt-10">
        <h2 className="text-4xl font-medium">
          <span className="mr-4 text-5xl text-blue-500 font-bold hover:cursor-pointer hover:animate-pulse relative">
            Portfolio
            <span className="absolute bottom-0 right-0 h-1 bg-blue-500 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
          </span>

          Panit Thapwon(variz.h264)
        </h2>

        <div className="grid grid-cols-5 gap-2 mt-5">
          <div className="p-3 bg-white rounded-md shadow-sm">
            <h6 className="text-1xl">ชื่อ: พาณิชย์</h6>
          </div>

          <div className="p-3 bg-white rounded-md shadow-sm">
            <h6 className="text-1xl">นามสกุล: ทัพวร</h6>
          </div>

          <div className="p-3 bg-white rounded-md shadow-sm">
            <h6 className="text-1xl">อายุ: 18ปี</h6>
          </div>

          <div className="p-3 bg-white rounded-md shadow-sm">
            <h6 className="text-1xl">วันเกิด: 28/07/2005</h6>
          </div>
          
          <div className="p-3 bg-white rounded-md shadow-sm">
            <h6 className="text-1xl">วันเกิด: 28/07/2005</h6>
          </div>
        </div>

        <form action={create} className="mt-5">
          <input
            type="text"
            className="py-2 px-4 border-2 border-gray-400 rounded-md shadow-sm outline-none focus:border-gray-600"
            name="name"
          />

          <button
            type="submit"
            className="ml-3 py-2 px-6 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
