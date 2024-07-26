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
    .min(3, "فامیلی شما حداقل باید 3 حرف داشته باشد")
    .max(20, "فامیلی شما حداکثر باید 20 حرف داشته باشد")
    .required("لطفا فامیلی خودتون رو بنویسید"),

  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9]{8,999}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور خودتون رو وارد کنید"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as any],
      "رمز عبور و تکرار رمز عبور باید مشابه باشند",
    )
    .required("لطفا رمز عبور خودتون رو تایید کنید"),

  phone: Yup.string(),
});

export let changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .matches(
      /^[a-zA-Z0-9]{8,999}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور فعلی خودتون رو وارد کنید"),

  newPassword: Yup.string()
    .matches( 
      /^[a-zA-Z0-9]{8,999}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 8 حرف داشته باشد",
    )
    .required("لطفا رمز عبور جدید رو وارد کنید"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null as any],
      "رمز عبور جدید و تکرار رمز عبور جدید باید مشابه باشند",
    )
    .required("لطفا رمز عبور جدید خودتون رو تایید کنید"),
});
