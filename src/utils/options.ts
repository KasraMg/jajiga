const firstTimeOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "12 ظهر",
    value: "12 ظهر",
  },
  {
    label: "1 ظهر",
    value: "1 ظهر",
  },
  {
    label: "2 ظهر",
    value: "2 ظهر",
  },
  {
    label: "3 عصر",
    value: "3 عصر",
  },
  {
    label: "4 عصر",
    value: "4 عصر",
  },
  {
    label: "5 عصر",
    value: "5 عصر",
  },
  {
    label: "6 عصر",
    value: "6 عصر",
  },
  {
    label: "7 شب",
    value: "7 شب",
  },
  {
    label: "8 شب",
    value: "8 شب",
  },
  {
    label: "9 شب",
    value: "9 شب",
  },
  {
    label: "10 شب",
    value: "10 شب",
  },
  {
    label: "11 شب",
    value: "11 شب",
  },
  {
    label: "12 شب",
    value: "12 شب",
  },
  {
    label: "1 شب",
    value: "1 شب",
  },
  {
    label: "2 شب",
    value: "2 شب",
  },
  {
    label: "3 شب",
    value: "3 شب",
  },
  {
    label: "4 صبح",
    value: "4 صبح",
  },
  {
    label: "5 صبح",
    value: "5 صبح",
  },
  {
    label: "6 صبح",
    value: "6 صبح",
  },
  {
    label: "7 صبح",
    value: "7 صبح",
  },
  {
    label: "8 صبح",
    value: "8 صبح",
  },
  {
    label: "9 صبح",
    value: "9 صبح",
  },
  {
    label: "10 صبح",
    value: "10 صبح",
  },
  {
    label: "11 صبح",
    value: "11 صبح",
  },
];
const secondTimeOptions: {
  label: string;
  value: string;
}[] = [
  { label: "نامحدود", value: "نامحدود" },
  {
    label: "12 ظهر",
    value: "12 ظهر",
  },
  {
    label: "1 ظهر",
    value: "1 ظهر",
  },
  {
    label: "2 ظهر",
    value: "2 ظهر",
  },
  {
    label: "3 عصر",
    value: "3 عصر",
  },
  {
    label: "4 عصر",
    value: "4 عصر",
  },
  {
    label: "5 عصر",
    value: "5 عصر",
  },
  {
    label: "6 عصر",
    value: "6 عصر",
  },
  {
    label: "7 شب",
    value: "7 شب",
  },
  {
    label: "8 شب",
    value: "8 شب",
  },
  {
    label: "9 شب",
    value: "9 شب",
  },
  {
    label: "10 شب",
    value: "10 شب",
  },
  {
    label: "11 شب",
    value: "11 شب",
  },
  {
    label: "12 شب",
    value: "12 شب",
  },
  {
    label: "1 شب",
    value: "1 شب",
  },
  {
    label: "2 شب",
    value: "2 شب",
  },
  {
    label: "3 شب",
    value: "3 شب",
  },
  {
    label: "4 صبح",
    value: "4 صبح",
  },
  {
    label: "5 صبح",
    value: "5 صبح",
  },
  {
    label: "6 صبح",
    value: "6 صبح",
  },
  {
    label: "7 صبح",
    value: "7 صبح",
  },
  {
    label: "8 صبح",
    value: "8 صبح",
  },
  {
    label: "9 صبح",
    value: "9 صبح",
  },
  {
    label: "10 صبح",
    value: "10 صبح",
  },
  {
    label: "11 صبح",
    value: "11 صبح",
  },
];
const spaceOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "دربست",
    value: "lockedRoom",
  },
  {
    label: "نیمه دربست",
    value: "semiClosedRoom",
  },
  {
    label: "اتاق خصوصی",
    value: "privetRoom",
  },
  {
    label: "اتاق مشترک",
    value: "commonRoom",
  },
];
const typeOptions: {
  label: string;
  value: string;
  href: string;
}[] = [
  {
    label: "ویلایی",
    value: "6696cebe0e8c458c0ea8c9f1",
    href: "house",
  },
  {
    label: "آپارتمان",
    value: "6696d05d0e8c458c0ea8ca29",
    href: "apartment",
  },
  {
    label: "سوئیت",
    value: "6696cf4d0e8c458c0ea8c9f8",
    href: "suite",
  },
  {
    label: "خانه روستایی",
    value: "6696cf880e8c458c0ea8ca02",
    href: "farmhouse",
  },
  {
    label: "کلبه",
    value: "6696cfc10e8c458c0ea8ca15",
    href: "cottage",
  },
  {
    label: "اقامتگاه بوم گردی",
    value: "6696cff30e8c458c0ea8ca1c",
    href: "ecoResort",
  },
  {
    label: "مهمان خانه",
    value: "6696d0b20e8c458c0ea8ca34",
    href: "guestHouse",
  },
  {
    label: "چادر / خیمه",
    value: "6696d0ec0e8c458c0ea8ca3b",
    href: "tent",
  },
];
const zoneOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "ساحلی",
    value: "littoral",
  },
  {
    label: "جنگلی",
    value: "silvan",
  },
  {
    label: "ییلاقی",
    value: "summerVilla",
  },
  {
    label: "بیابانی",
    value: "desertHouse",
  },
  {
    label: "شهری",
    value: "townHouse",
  },
  {
    label: "حومه شهر",
    value: "suburbanHouse",
  },
  {
    label: "روستایی",
    value: "cottage",
  },
];
const userCountOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "1 نفر",
    value: "1 نفر",
  },
  {
    label: "2 نفر",
    value: "2 نفر",
  },
  {
    label: "3 نفر",
    value: "3 نفر",
  },
  {
    label: "4 نفر",
    value: "4 نفر",
  },
];
const categoryFilterOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "ارزانترین",
    value: "low_price",
  },
  {
    label: "گرانترین",
    value: "high_price",
  },
  {
    label: "جدید ترین",
    value: "newest",
  },
  {
    label: "قدیمی ترین",
    value: "older",
  },
];

const footerOptions: {
  lable: string;
  href: string;
}[] = [
  { lable: " اجاره اقامتگاه گیلان", href: "/rooms?city=gilan" },
  { lable: "اجاره اقامتگاه رامسر", href: "/rooms?city=ramsar" },
  { lable: "اجاره اقامتگاه مشهد", href: "/rooms?city=mashhad" },
  { lable: "اجاره اقامتگاه کردان", href: "/rooms?city=kordan" },
  { lable: "اجاره اقامتگاه ماسال", href: "/rooms?city=masal" },
  { lable: "اجاره اقامتگاه در کیش", href: "/rooms?city=kish" },
  { lable: "اجاره اقامتگاه  تهران", href: "/rooms?city=tehran" },
  { lable: "اجاره اقامتگاه بوشهر", href: "/rooms?city=bushehr" },
  { lable: "اجاره اقامتگاه قشم", href: "/rooms?city=gheshm" },
  { lable: "اجاره اقامتگاه آستارا", href: "/rooms?city=astara" },
  { lable: "اجاره اقامتگاه چالوس", href: "/rooms?city=chaloos" },
  { lable: "اجاره اقامتگاه شیراز", href: "/rooms?city=shiraz" },
  { lable: "اجاره اقامتگاه تبریز", href: "/rooms?city=tabriz" },
  { lable: "اجاره اقامتگاه آبادان", href: "/rooms?city=abadan" },
  { lable: "اجاره اقامتگاه اهواز", href: "/rooms?city=ahvaz" },
];


const faqOptions: {
  title: string;
  text: string;
}[] = [
{title:"چطور رزرو کنم؟",text:"پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید و رزرو میکنید. به دلیل این که این پروژه نمونه کار هست آنچنان موارد سفت و سخت گیری نزاشتیم."},
{title:"واژه جاجیگا به چه معناست؟",text:"واژه جاجیگا  در گویش گیلکی، به معنی جا، مکان و محل می‌باشد. همچنین به جای خواب و استراحت نیز اطلاق می‌گردد."},
{title:"جاجیگا چه خدمتی ارائه میده؟",text:"این کسب و کار بستریست تا میزبانان و صاحبان منازل و اقامتگاه ها بتوانند ملک خود را در محیطی امن و پیشرفته، با صرف حداقل زمان و هزینه برای اجاره روزانه عرضه کنند و از سوی دیگر گردشگران بتوانند اقامتگاهی مطابق با سلیقه و شرایط و بودجه مورد نظر خود را به سهولت در سراسر ایران بیابند و بصورت آنلاین رزرو کنند و سفری بدون دغدغه ی مکان اقامت را در سراسر ایران زیبا تجربه کنند."},
{title:"چه مناطقی از کشور تحت پوشش جاجیگا است؟",text:"پوشش خدمات جاجیگا به وسعت پهنه جغرافیایی کشور ایران از شهرهای بزرگ تا دورترین روستاها می‌باشد. در حال حاضر بیش از 24000 اقامتگاه در بیش از 250 شهر، روستا و منطقه گردشگری تحت پوشش خدمات جاجیگا قرار گرفته و این روند با سرعتی شتابان در حال افزایش است."},
{title:"آیا این کسب و کار قانونی است؟",text:"استارتاپ جاجیگا عضو رسمی پارک علم و فناوری گیلان و دارای گواهی دانش بنیان از معاونت علمی ریاست جمهوری، مجوز گردشگری الکترونیک از وزارت گردشگری، پروانه فعالیت از اتحادیه کشوری کسب و کارهای مجازی و اینماد از وزارت سمت می باشد که تعدادی از آنها در فوتر سایت قابل مشاهده است"},
{title:"میزان درآمد تخمینی هر اقامتگاه چقدر است؟",text:"میزان درآمد تخمینی هر اقامتگاه به عواملی همچون وسعت، ظرفیت اقامتی و کیفیت اقامتگاه، تجهیزات و امکانات فراهم شده، جذابیت و شهرت و گردشگرپسند بودن منطقه و همچنین شیوه میزبانی و کیفیت پذیرایی از گردشگران و مهمانان اقامتگاه وابسته می‌باشد."},
{title:"هزینه خدمات جاجیگا چقدر است؟",text:"تمامی مراحل ایجاد حساب کاربری، جستجو، بررسی، مقایسه و همچنین ثبت و انتشار و معرفی اقامتگاه‌ها در وبسایت بصورت رایگان در اختیار تمامی کاربران می‌باشد. محل درآمد جاجیگا شامل درصدی اندک از هر رزرو قطعی است که به عنوان کارمزد از میزبانان دریافت میگردد."},
// {title:"",text:""},
// {title:"",text:""},
// {title:"",text:""},
// {title:"",text:""},
// {title:"",text:""},
]
export {
  firstTimeOptions,
  secondTimeOptions,
  zoneOptions,
  typeOptions,
  spaceOptions,
  userCountOptions,
  categoryFilterOptions,
  footerOptions,
  faqOptions
};
