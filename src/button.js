import React, {useState} from 'react';
export default function Button({children1,count,children2, enable}){
    // Жмякни меня посильней!
    const [current, setCurrent] = useState(5);
    const handelClick = ()=>{ if (current!==0){setCurrent(current-1);}
    else{alert('Тебе хорошо');};};

    console.log(enable);
    
return <button onClick={handelClick} class="okkk">{children1} {count} {children2}</button> ;
}