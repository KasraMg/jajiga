import * as Yup from "yup";

export let supportSchema = Yup.object().shape({
  message: Yup.string()
    .min(10, "متن شما حداقل باید 10 حرف داشته باشد")
    .max(200, "متن شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا متنی بنویسید"),

  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .min(10, "ایمیل شما حداقل باید 10 حرف داشته باشد")
    .max(30, "ایمیل شما حداکثر باید 30 حرف داشته باشد")
    .required("لطفا ایمیل خودتون و وارد کنید"),

  name: Yup.string()
    .min(3, "اسم شما حداقل باید 3 حرف داشته باشد")
    .max(12, "اسم شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا اسم خودتون و وارد کنید"),
});

export let registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "اسم شما حداقل باید 10 حرف داشته باشد")
    .max(10, "اسم شما حداکثر باید 10 حرف داشته باشد")
    .required("لطفا اسم خودتون رو بنویسید"),

  lastName: Yup.string()
    .min(3, "فامیل شما حداقل باید 3 حرف داشته باشد")
    .max(10, "فامیل شما حداکثر باید 10 حرف داشته باشد")
    .required("لطفا فامیلی خودتون رو بنویسید"),

  Password: Yup.string()
    .min(5, "رمز عبور شما حداقل باید 5 حرف داشته باشد")
    .max(12, "رمز عبور شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا رمز عبور خودتون رو وارد کنید"),

  ConfirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("Password"), null as any],
      "رمز عبور و تکرار رمز عبور باید مشابه باشند",
    )
    .required("لطفا رمز عبور خودتون رو تایید کنید"),

  Phone: Yup.string(),
});
