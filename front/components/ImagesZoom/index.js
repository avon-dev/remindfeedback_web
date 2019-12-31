import React, { useState,useEffect } from 'react';
import Slick from 'react-slick';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator } from './style';

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [img, setImg] = useState([]);

  useEffect(()=>{
    let r = [];
    if(!images.board_file2){
      r = [images.board_file1,images.board_file3];
    }else if(!images.board_file3){
      r = [images.board_file1,images.board_file2];
    }else if(!images.board_file3&&!images.board_file2){
      r = [images.board_file1];
    }else{
      r = [images.board_file1,images.board_file2,images.board_file3];
    }
    setImg(r);
    console.log(r,"img");
  },[images&&images]);

  return (
    <Overlay>
      <Header>
        <h1><strong>상세 이미지</strong></h1>
        <CloseBtn type="close" onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={slide => setCurrentSlide(slide)}
            speed={500}
            infinite={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {img.map((v,i)=>{
              return(
                <ImgWrapper key={v+i}>
                  <img src={`https://remindfeedback.s3.ap-northeast-2.amazonaws.com/${v}`} />
                </ImgWrapper>
              )
            })}  
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {img.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;