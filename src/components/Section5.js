import styles from "./Section5.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import lineUp from "../resources/lineUp.png";
import shoppingBag from "../resources/shoppingBag.png";
import brandList2 from "../resources/brandList2.png";
import product01 from "../resources/product01.png";
import product02 from "../resources/product02.png";
import product03 from "../resources/product03.png";
import product04 from "../resources/product04.png";
import product05 from "../resources/product05.png";
import product06 from "../resources/product06.png";
import product07 from "../resources/product07.png";
import product08 from "../resources/product08.png";
import product09 from "../resources/product09.png";
import product10 from "../resources/product10.png";
import product11 from "../resources/product11.png";
import product12 from "../resources/product12.png";
import product13 from "../resources/product13.png";
import product14 from "../resources/product14.png";
import product15 from "../resources/product15.png";
import product16 from "../resources/product16.png";
import product17 from "../resources/product17.png";
import product18 from "../resources/product18.png";
import product19 from "../resources/product19.png";
import product20 from "../resources/product20.png";

function Section5 () {
  const products = [
    product01, product02, product03, product04, product05,
    product06, product07, product08, product09, product10,
    product11, product12, product13, product14, product15,
    product16, product17, product18, product19, product20,
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>요즘 잘나가는 <span className={styles.orangeText}>상품</span><br/>
          여기 다 모았습니다
          </h2>
          <p className={styles.subTitle}>재고 · 상품 · 브랜드까지 본사가 책임지는 통합 공급 시스템</p>
        </div>
        <div className={styles.centerBox}>
          <p className={styles.lineUp}>엄선된 라인업</p>
          <img src={shoppingBag} alt="쇼핑백 3d 아이콘" className={styles.shoppingBag} />
          <ul className={styles.countBox}>
            <li className={styles.countBoxEach}>
              <p className={styles.countBoxEachTitle}>상품 가짓수</p>
              <p className={styles.countBoxEachContent}>230종</p>
            </li>
            <li className={styles.countBoxEach}>
              <p className={styles.countBoxEachTitle}>총 상품 수</p>
              <p className={styles.countBoxEachContent}>2,850개</p>
            </li>
          </ul>
          <div className={styles.brandList}>
            <img src={brandList2} alt="브랜드 목록 이미지" />
          </div>
        </div>
        {/* 기기 사진 제거
        <div className={styles.swiperBox}>
        <Swiper
          modules={[Autoplay]} 
          
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 50,
              slidesPerView: 6
            }
          }}
        >
         {products.map((src, index) => (
          <SwiperSlide key={`product_${index}`}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={src} alt="상품 이미지" />
            </div>
          </SwiperSlide>
         ))} 
        </Swiper>
        </div> */}
        
      </div>
    </div>
  )
}

  export default Section5;