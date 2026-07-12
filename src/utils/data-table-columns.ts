export const categoryColumns = [
    {
      name: "نام دسته بندی",
      selector: (row: { title: string }) => row.title,
      sortable: true,
    },
    {
      name: "تعداد اقامتگاه های ثبت شده",
      selector: (row: { count: string }) => row.count,
      sortable: true,
    },
    {
      name: "زمان ثبت",
      selector: (row: { register: string }) => row.register,
      sortable: true,
    },
    {
      name: "حذف دسته بندی",
      selector: (row: { delete: string }) => row.delete,
      sortable: true,
    },
  ];

  export const commentColumns = [
    {
      name: "نویسنده",
      selector: (row: { userData: string }) => row.userData,
      sortable: true,
    },
    {
      name: "پیش نمایش",
      selector: (row: { preview: string }) => row.preview,
      sortable: true,
    },
    {
      name: "اقامتگاه",
      selector: (row: { room: string }) => row.room,
      sortable: true,
    },
    {
      name: "زمان ثبت",
      selector: (row: { register: string }) => row.register,
      sortable: true,
    },
    {
      name: "وضعیت",
      selector: (row: { status: string }) => row.status,
      sortable: true,
    },
    {
      name: "حذف",
      selector: (row: { delete: string }) => row.delete,
      sortable: true,
    },
  ];

  export const roomColumns = [
    {
      name: "اطلاعات مالک",
      selector: (row: { userData: string }) => row.userData,
      sortable: true,
    },
    {
      name: "پیش نمایش",
      selector: (row: { preview: string }) => row.preview,
      sortable: true,
    },
    {
      name: "آدرس",
      selector: (row: { address: string }) => row.address,
      sortable: true,
    },
    {
      name: "تعداد رزروها",
      selector: (row: { reserves: string }) => row.reserves,
      sortable: true,
    },
    {
      name: "وضعیت",
      selector: (row: { status: string }) => row.status,
      sortable: true,
    },
    {
      name: "زمان ثبت",
      selector: (row: { register: string }) => row.register,
      sortable: true,
    },
    {
      name: "حذف ویلا",
      selector: (row: { delete: string }) => row.delete,
      sortable: true,
    },
  ];

  export const userColumns = [
    {
      name: "کاربر",
      selector:(row: { userData: string }) => row.userData,
      sortable: true,
    },
    {
      name: "شماره",
      selector:(row: { phone: string }) => row.phone,
      sortable: true,
    },
    {
      name: "تعداد اقامتگاه",
      selector:(row: { rooms: string }) => row.rooms,
      sortable: true,
    },
    {
      name: "تاریخ عضویت",
      selector:(row: { register: string }) => row.register,
      sortable: true,
    },
    {
      name: "تعداد رزرو",
      selector:(row: { reserves: string }) => row.reserves,
      sortable: true,
    },
    {
      name: "سطح",
      selector:(row: { role: string }) => row.role,
      sortable: true,
    },
    {
      name: "تغییر سطح",
      selector:(row: { changeRole: string }) => row.changeRole,
      sortable: true,
    },
    {
      name: "بن",
      selector:(row: { ban: string }) => row.ban,
      sortable: true,
    },
  ];
  
  export const reservesColumns = [
    {
      name: "کاربر",
      selector:(row: { userData: string }) => row.userData,
      sortable: true,
    },
    {
      name: "شماره",
      selector:(row: { phone: string }) => row.phone,
      sortable: true,
    },
    {
      name: "اقامتگاه",
      selector:(row: { room: string }) => row.room,
      sortable: true,
    },
    {
      name: "تاریخ رزرو",
      selector:(row: { register: string }) => row.register,
      sortable: true,
    },
    {
      name: "قیمت",
      selector:(row: { price: string }) => row.price,
      sortable: true,
    }, 
  ];
  
  export const reserveModalColumns = [
    {
      name: "رزرو شده توسط",
      selector: (row: { reserveBy: string }) => row.reserveBy,
      sortable: true,
    },
    {
      name: "قیمت کلی",
      selector: (row: { price: string }) => row.price,
      sortable: true,
    },
    {
      name: "زمان شروع رزرو",
      selector: (row: { from: string }) => row.from,
      sortable: true,
    },
    {
      name: "زمان پایان رزرو",
      selector: (row: { to: string }) => row.to,
      sortable: true,
    },
    {
      name: "تعداد نفرات",
      selector: (row: { count: string }) => row.count,
      sortable: true,
    },
    {
      name: "زمان ثبت رزرو",
      selector: (row: { register: string }) => row.register,
      sortable: true,
    },
  ];