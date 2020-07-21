import React from 'react';
import Tab from '../../common/component/tab';
export default function LecturerTab(props){
    let {data,newData,showAlert} = props;
    return data.length<1?"":<Tab
    data={newData}
    render={(data)=>{
       return  (data.length<1?"" :
               <Tab
                   data={newData}
                   render={(data)=>{
                       return (<ul className="lecturer_list">
                           {
                               data.map(item => {
                                   let point = {};
                                   return (<li
                                       key={item.id}
                                       onTouchStart={(e)=>{
                                           let touch = e.changedTouches[0];
                                           point.x = touch.pageX;
                                           point.y = touch.pageY;
                                       }}
                                       onTouchEnd={(e)=>{
                                           let touch = e.changedTouches[0];
                                           let nowPoint = {
                                               x: touch.pageX,
                                               y: touch.pageY
                                           };
                                           // 计算手指抬起和按下的坐标差，超过5个孝素就不是想点击，而是别的操作了
                                           //console.log(point,nowPoint);
                                           if(Math.abs(nowPoint.x - point.x)<5
                                               &&Math.abs(nowPoint.y - point.y)<5){
                                               showAlert(item);
                                           }
                                       }}
                                   >
                                       <img src={item.icon}/>
                                       <p>
                                           {item.title}
                                       </p>
                                   </li>)
                               })
                           }
                       </ul>)
                   }}
               >

               </Tab>)
        }}
    />
}