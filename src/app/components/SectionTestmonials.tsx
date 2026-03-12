"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function SectionTestmonials() {
  
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >

          <SwiperSlide>
            <div className="testimonial-item">
              <h3>Luiz Fernando</h3>
              <h4>Cliente</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Com certeza a WinNET Fibra é melhor internet de Mata Roma!
                #ObrigadoWinNetFibra
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <h3>Junior Silva</h3>
              <h4>Cliente</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                O Melhor suporte de Mata Roma, muito rápido!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <h3>Ana Clara</h3>
              <h4>Cliente</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Acho incrível a forma como a WinNet Fibra atende seus clientes, sem contar a qualidade da internet!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
}

export default SectionTestmonials;