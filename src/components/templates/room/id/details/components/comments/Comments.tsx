import { ButtonLoader } from "@/src/components/modules/loader/Loader";
import Textarea from "@/src/components/modules/textarea/Textarea";
import { Button } from "@/src/components/shadcn/ui/button";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import usePostData from "@/src/hooks/usePostData";
import { authStore } from "@/src/stores/auth";
import { comment } from "@/src/types/Villa.types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const Comments = ({ comments }: { comments: comment[] }) => {
  const [isReserve, setIsReserve] = useState(false);
  const { userData } = authStore((state) => state);
  const [body, setBody] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const params = useParams();
  const handleClick = (index: number) => {
    if (score === index + 1) {
      setScore(null);
    } else {
      setScore(index + 1);
    }
  };

  useEffect(() => {
    if (userData) {
      const reserve = userData.books.some((book) => book.villa === params.id);
      setIsReserve(reserve);
    }
  }, [userData]);

  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title:
          "نظر شما با موفقیت ثبت و پس از تایید ادمین به سایت اضافه خواهد شد",
      });
    } else {
      toast({
        variant: "danger",
        title: "مشکلی در ثبت نظر وجود دارد...",
      });
      location.reload();
    }
  };
  const { mutate: mutation, isPending } = usePostData<any>(
    `/comment/create`,
    null,
    false,
    successFunc,
  );

  const addCommentHandler = () => {
    if (score && body) {
      const data = {
        body,
        score,
        villa: params.id,
      };
      mutation(data);
    } else
      toast({
        variant: "danger",
        title: "لطفا ابتدا تمام فیلد ها (ستاره و متن) رو کامل کنید",
      });
  };

  return (
    <>
      {isReserve && (
        <div className="border-b border-solid border-gray-300 pb-8">
          <div className="flex items-center justify-between">
            <p className="my-6 mb-4 text-lg text-[#252a31]">
              تجربه شما از این رزرو چطور بود؟
            </p>
            <div className="flex gap-1 text-xl [&>*]:cursor-pointer">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} onClick={() => handleClick(index)}>
                    {index < (score ?? 0) ? (
                      <FaStar className="text-orange-500" />
                    ) : (
                      <IoIosStarOutline />
                    )}
                  </div>
                ))}
            </div>
          </div>
          <Textarea maxLength={250} setValue={setBody} value={body} />
          <Button
            onClick={addCommentHandler}
            className="mt-3 h-9 px-5"
            variant={"danger"}
          >
            {isPending ? <ButtonLoader /> : "ثبت نظر"}
          </Button>
        </div>
      )}
      {comments && (
        <div className="w-full pb-3">
          <p className="my-6 mb-4 text-lg text-[#252a31]">
            نظر مهمانان <span className="text-sm">({comments.length} نظر)</span>
          </p>
          <div className="mt-6">
            <>
              {" "}
              {comments?.map((comment) => (
                <section className="mb-6 border-b border-solid border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        className="h-14 w-14 rounded-full object-cover"
                        alt="author"
                        width={1000}
                        height={1000}
                        src={
                          comment.creator.avatar
                            ? `https://jajiga-backend.liara.run/user/avatars/${comment.creator.avatar}`
                            : `/images/profile.jpg`
                        }
                      />
                      <div>
                        <p>{comment.creator.firstName}</p>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1 text-xs">
                      {Array(comment.score)
                        .fill(0)
                        .map(() => (
                          <FaStar className="text-orange-500" />
                        ))}
                      {Array(5 - comment.score)
                        .fill(0)
                        .map(() => (
                          <IoIosStarOutline />
                        ))}
                    </div>
                  </div>
                  <p className="font-vazir mt-5 text-sm font-light">
                    {comment.body}
                  </p>
                  {/* <section className="mx-3 mt-3 rounded-md bg-[#f3f3f3] p-2">
                    <div className="flex items-center gap-3">
                      <Image
                        className="h-10 w-10 rounded-full object-cover"
                        alt="author"
                        width={1000}
                        height={1000}
                        src={"/images/about/about_img6.jpg"}
                      />
                      <div>
                        <p className="text-sm">پاسخ میزبان</p>
                        <span className="text-sm text-gray-500">
                          07 دی 1402
                        </span>
                      </div>
                    </div>
                    <p className="font-vazir mt-5 text-sm font-light">
                      عالی بود، از همه چیز راضی بودیم
                    </p>
                  </section> */}
                </section>
              ))}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
