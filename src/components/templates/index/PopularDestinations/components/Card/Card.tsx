 
const Card = () => {
  return (
    <section className='flex items-center gap-2 justify-center cursor-pointer'>
      <img className='rounded-lg w-[70px] h-[70px] sm:!w-20 sm:!h-20 lg:!w-36  lg:!h-36' src="https://www.jajiga.com/static/img/home/top-locations/ramsar.jpg?v=8" alt="" />
      <div>
        <p className='text-[12px] font-vazir-light'>اجاره ویلا در</p>
        <span>شیراز</span>
        <p className='text-[12px] font-vazir-light'>1206 ویلا</p>
      </div>
    </section>
  )
}

export default Card
