import { categoryStore } from "@/src/stores/category";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  data,
}: {
  data: {
    cover: string;
    count: string;
    title: string;
    persianTitle: string;
  };
}) => {
  const { setVillaZone } = categoryStore((state) => state);

  return (
    <Link
      onClick={() => setVillaZone([data.title])}
      href={`/rooms`}
      className="relative cursor-pointer text-white"
    >
      <Image
        className="!h-[247px] w-full rounded-xl object-cover sm:!h-[274px]"
        alt="img"
        width={1000}
        height={1000}
        src={`https://jajiga-backend.liara.run/static/zone/${data.cover}`}
      />
      <div
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
        }}
        className="absolute bottom-0 w-full rounded-xl pb-4 text-center"
      >
        <p className="mb-2">{data.persianTitle}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="font-vazir text-[12px] font-light">
            {data.count} اقامتگاه
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
