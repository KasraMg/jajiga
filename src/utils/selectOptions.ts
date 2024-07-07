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
            value: "lockedRoom"
        },
        {
            label: "نیمه دربست",
            value: "semiClosedRoom"
        },
        {
            label: "اتاق خصوصی",
            value: "privetRoom"
        },
        {
            label: "اتاق مشترک",
            value: "commonRoom"
        }
    ]
const typeOptions: {
    label: string,
    value: string
}[] = [
        {
            label: "ویلایی",
            value: "3333"
        },
        {
            label: "آپارتمان",
            value: "3333"
        },
        {
            label: "سوئیت",
            value: "333"
        },
        {
            label: "خانه روستایی",
            value: "333"
        },
        {
            label: "کلبه",
            value: "3333"
        },
        {
            label: "اقامتگاه بوم گردی",
            value: "3333"
        },
        {
            label: "هتل آپارتمان",
            value: "3333"
        },
        {
            label: "مهمان خانه",
            value: "3333"
        },
        {
            label: "چادر / خیمه",
            value: "3333"
        },
        {
            label: "کاروانسرا",
            value: "3333"
        },
        {
            label: "قایق",
            value: "3333"
        },
        {
            label: "پانسیون",
            value: "333"
        },
        {
            label: "هاستل",
            value: "2222"
        },
        {
            label: "بوتیک هتل",
            value: '111'
        }
    ]
const areaOptions: {
    label: string,
    value: string
}[] = [
        {
            label: "ساحلی",
            value: "littoral"
        },
        {
            label: "جنگلی",
            value: "silvan"
        },
        {
            label: "ییلاقی",
            value: "summerVilla"
        },
        {
            label: "بیابانی",
            value: "desertHouse"
        },
        {
            label: "شهری",
            value: "townHouse"
        },
        {
            label: "حومه شهر",
            value: "suburbanHouse"
        },
        {
            label: "روستایی",
            value: "cottage"
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
const categoryFilterOptions:{
    label: string,
    value: string
}[]=[
    {
        label: "ارزانترین",
        value: "ارزانترین"
    },
    {
        label: "گرانترین",
        value: "گرانترین"
    },
    {
        label: "جدید ترین",
        value: "جدید ترین"
    },
    {
        label: "قدیمی ترین",
        value: "قدیمی ترین"
    },
]




export { firstTimeOptions, secondTimeOptions, areaOptions, typeOptions, spaceOptions, userCountOptions, categoryFilterOptions }