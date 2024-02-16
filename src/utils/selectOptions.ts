const firstTimeOptions: {
    label: string,
    value: string
}[] = [

        {
            label: "12 ظهر",
            value: "12 ظهر"
        },
        {
            label: "1 ظهر",
            value: "1 ظهر"
        },
        {
            label: "2 ظهر",
            value: "2 ظهر"
        },
        {
            label: "3 عصر",
            value: "3 عصر"
        },
        {
            label: "4 عصر",
            value: "4 عصر"
        },
        {
            label: "5 عصر",
            value: "5 عصر"
        },
        {
            label: "6 عصر",
            value: "6 عصر"
        },
        {
            label: "7 شب",
            value: "7 شب"
        },
        {
            label: "8 شب",
            value: "8 شب"
        },
        {
            label: "9 شب",
            value: "9 شب"
        },
        {
            label: "10 شب",
            value: "10 شب"
        },
        {
            label: "11 شب",
            value: "11 شب"
        },
        {
            label: "12 شب",
            value: "12 شب"
        },
        {
            label: "1 شب",
            value: "1 شب"
        },
        {
            label: "2 شب",
            value: "2 شب"
        },
        {
            label: "3 شب",
            value: "3 شب"
        },
        {
            label: "4 صبح",
            value: "4 صبح"
        },
        {
            label: "5 صبح",
            value: "5 صبح"
        },
        {
            label: "6 صبح",
            value: "6 صبح"
        },
        {
            label: "7 صبح",
            value: "7 صبح"
        },
        {
            label: "8 صبح",
            value: "8 صبح"
        },
        {
            label: "9 صبح",
            value: "9 صبح"
        },
        {
            label: "10 صبح",
            value: "10 صبح"
        },
        {
            label: "11 صبح",
            value: "11 صبح"
        }
    ]
const secondTimeOptions: {
    label: string,
    value: string
}[] = [
        { label: "نامحدود", value: "نامحدود" },
        {
            label: "12 ظهر",
            value: "12 ظهر"
        },
        {
            label: "1 ظهر",
            value: "1 ظهر"
        },
        {
            label: "2 ظهر",
            value: "2 ظهر"
        },
        {
            label: "3 عصر",
            value: "3 عصر"
        },
        {
            label: "4 عصر",
            value: "4 عصر"
        },
        {
            label: "5 عصر",
            value: "5 عصر"
        },
        {
            label: "6 عصر",
            value: "6 عصر"
        },
        {
            label: "7 شب",
            value: "7 شب"
        },
        {
            label: "8 شب",
            value: "8 شب"
        },
        {
            label: "9 شب",
            value: "9 شب"
        },
        {
            label: "10 شب",
            value: "10 شب"
        },
        {
            label: "11 شب",
            value: "11 شب"
        },
        {
            label: "12 شب",
            value: "12 شب"
        },
        {
            label: "1 شب",
            value: "1 شب"
        },
        {
            label: "2 شب",
            value: "2 شب"
        },
        {
            label: "3 شب",
            value: "3 شب"
        },
        {
            label: "4 صبح",
            value: "4 صبح"
        },
        {
            label: "5 صبح",
            value: "5 صبح"
        },
        {
            label: "6 صبح",
            value: "6 صبح"
        },
        {
            label: "7 صبح",
            value: "7 صبح"
        },
        {
            label: "8 صبح",
            value: "8 صبح"
        },
        {
            label: "9 صبح",
            value: "9 صبح"
        },
        {
            label: "10 صبح",
            value: "10 صبح"
        },
        {
            label: "11 صبح",
            value: "11 صبح"
        }
    ]
const spaceOptions: {
    label: string,
    value: string
}[] = [
        {
            label: "دربست",
            value: "دربست"
        },
        {
            label: "نیمه دربست",
            value: "نیمه دربست"
        },
        {
            label: "اتاق خصوصی",
            value: "اتاق خصوصی"
        },
        {
            label: "اتاق مشترک",
            value: "اتاق مشترک"
        }
    ]
const typeOptions: {
    label: string,
    value: string
}[] = [
        {
            label: "ویلایی",
            value: "ویلایی"
        },
        {
            label: "آپارتمان",
            value: "آپارتمان"
        },
        {
            label: "سوئیت",
            value: "سوئیت"
        },
        {
            label: "خانه روستایی",
            value: "خانه روستایی"
        },
        {
            label: "کلبه",
            value: "کلبه"
        },
        {
            label: "اقامتگاه بوم گردی",
            value: "اقامتگاه بوم گردی"
        },
        {
            label: "هتل آپارتمان",
            value: "هتل آپارتمان"
        },
        {
            label: "مهمان خانه",
            value: "مهمان خانه"
        },
        {
            label: "چادر / خیمه",
            value: "چادر / خیمه"
        },
        {
            label: "کاروانسرا",
            value: "کاروانسرا"
        },
        {
            label: "قایق",
            value: "قایق"
        },
        {
            label: "پانسیون",
            value: "پانسیون"
        },
        {
            label: "هاستل",
            value: "هاستل"
        },
        {
            label: "بوتیک هتل",
            value: "بوتیک هتل"
        }
    ]
const areaOptions: {
    label: string,
    value: string
}[] = [
        {
            label: "ساحلی",
            value: "ساحلی"
        },
        {
            label: "جنگلی",
            value: "جنگلی"
        },
        {
            label: "ییلاقی",
            value: "ییلاقی"
        },
        {
            label: "بیابانی",
            value: "بیابانی"
        },
        {
            label: "شهری",
            value: "شهری"
        },
        {
            label: "حومه شهر",
            value: "حومه شهر"
        },
        {
            label: "روستایی",
            value: "روستایی"
        }
    ]
const userCountOptions:{
    label: string,
    value: string
}[]=[
    {
        label: "1 نفر",
        value: "1 نفر"
    },
    {
        label: "2 نفر",
        value: "2 نفر"
    },
    {
        label: "3 نفر",
        value: "3 نفر"
    },
    {
        label: "4 نفر",
        value: "4 نفر"
    },
]




export { firstTimeOptions, secondTimeOptions, areaOptions, typeOptions, spaceOptions, userCountOptions }