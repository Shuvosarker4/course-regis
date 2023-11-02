import PropTypes from 'prop-types';
import { useState } from "react";
import Cards from "../Cards/Cards";
import Course from "../Course/Course";
import swal from 'sweetalert';

const Headers = () => {
    const [select, setSelect] = useState([]);
    const [total, setTotal] = useState(0);
    const [credit,setCredit] = useState(0);
    const[remain, setRemain] = useState(20);

    const selectHandler = (card)=>{
        let price = total + card.price;
        let hour = credit + card.credit;
        let remainHour = remain - card.credit;
        const isExist = select.find((item)=> item.header == card.header);
        if(!isExist){
            if(hour<=20 && remainHour<=20){
                setSelect([...select,card]);
                setTotal(price);
                setCredit(hour);
                setRemain(remainHour);
            }else{
                swal("You cant add more than 20 credit hour");
            }
        }else{
            swal("You can't select multiple course");
        }
        
    }
    // console.log(typeof select)
    return (
        <div>
            <div><h1 className="text-4xl text-center mt-2 font-bold">Course Knowledge</h1></div>
            <div className="flex flex-col lg:flex-row">
            <Cards selectHandler={selectHandler}></Cards>
            <Course select={select} total={total} credit={credit} remain={remain}></Course>
            </div>
        </div>
        
    );
};
Headers.propTypes = {
    select:PropTypes.array,
    total:PropTypes.number,
}

export default Headers;