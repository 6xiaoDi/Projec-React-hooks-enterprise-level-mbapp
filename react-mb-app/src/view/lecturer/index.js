import React,{useEffect,useState} from 'react';
import Frame from '../../common/component/frame';
import "../../common/css/teacher.css";

function Lecturer(props) {
  
  return (
      <Frame>
        <div className="teacher_banner">
            <h2>
              <span>
                妙味团队
              </span>
            </h2>
        </div>
      </Frame>
  );
}

export default Lecturer;