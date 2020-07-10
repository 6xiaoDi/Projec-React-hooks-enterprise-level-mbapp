import React, { useState, useMemo} from 'react';

function Memo() {
    const [name,setName] = useState("leo");
    const [age,setAge] = useState(10);
    let age2 = (()=>{
        console.log(1);
        return age < 18?"未成年":"成年人";
    })();
    return (<div>
        姓名:{name},<br />
        年龄:{age},<br />
        年龄阶段:{age2},<br />
        <button onClick={()=>{
            setAge(age+2);
        }}>长大</button>
    </div>);
}

export default Memo;
