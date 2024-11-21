import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const data = [
    {
      name: "Pão",
      img: "/alimentos/pao.jpeg",
    },
    {
      name: "Salada",
      img: "/alimentos/salada1.jpeg",
    },
    {
      name: "Salada2",
      img: "/alimentos/salada2.jpeg",
    },
    {
      name: "Plantas",
      img: "/alimentos/plantas.jpg",
    },
    {
      name: "Salada4",
      img: "/alimentos/salada4.jpg",
    }
  ];

  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="text-black ">
              <div className='h-56 bg-white flex justify-center items-center '>
                <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full border-4 border-red-500"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
