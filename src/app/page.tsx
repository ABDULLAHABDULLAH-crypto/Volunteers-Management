import Image from "next/image";
import { Tajawal } from "next/font/google";
const TajawalFont = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-tajawal",
});

export default function Home() {
  // const Voulneers = [
  //   {
  //     name: "Hnadi Abdrhman AlGhamdi ",
          // id: "1113319113",
  //     start_date: "2024/10/1",
  //     End_date: "2024/10/31",
  //     Direction: "",
  //   },
  // ];

  return (
    <div
      className={`min-h-full  flex flex-col gap-20 justify-center items-center ${TajawalFont.variable} transition-all `}
    >
      {/* NavBar */}
      <header className=" flex flex-row w-[80%] items-center justify-between p-4 h-30 border-b-secondry border-b-2 ">
        <button className="p-2 bg-secondry rounded-full lg:w-32 sm:w-20 hover:bg-primary font-tajawal mt-4 text-sm">
          للتواصل
        </button>
        <a href="#">
          <Image src="/image.png" alt="شعار" width={200} height={100} />
        </a>
      </header>

      <main className="bg-primary w-[70%] mb-10  sm:w-[350px] p-8  rounded-lg font-tajawal flex flex-col items-center justify-center gap-8">
        <Image
          src={"/image (2).png"}
          alt="شعار"
          width={100}
          height={100}
          className="rounded-full mt-5"
        ></Image>
        <h1 className="text-3xl   text-center"> هنادي عبدالرحمن الغامدي </h1>
        {/* <h2 className="text-xl bg-secondry  p-2 rounded-lg">متطوعة</h2> */}
        <h2 className="text-xl bg-red-700  p-2 rounded-lg"> غير متطوعة  </h2>
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="flex flex-row gap-5 items-center justify-center">
            <p className="text-lg w-28"> 1113319113</p>
            <h2 className="text-secondry">الهوية </h2>
          </span>
          <span className="flex flex-row gap-5 items-center justify-center">
            <p className="text-lg w-20"> 2024/10/1</p>
            <h2 className="text-secondry">تاريخ البداية</h2>
          </span>
          <span className="flex flex-row gap-5 items-center justify-center">
            <p className="text-lg w-20"> 2024/10/31</p>
            <h2 className="text-secondry">تاريخ النهاية</h2>
          </span>
          <span className="flex flex-row gap-5 items-center justify-center">
            <p className="text-lg w-20">الحرم </p>
            <h2 className="text-secondry">الجهة </h2>
          </span>
        </div>
      </main>
    </div>
  );
}
