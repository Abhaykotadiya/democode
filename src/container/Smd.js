import React from 'react';

function Smd(props) {

    let arr1=[10,20,30];
    let arr2=[40,50];
    // copy
    let arr3=[...arr1];
    console.log(arr3);

    // concate
    let arr4 =[...arr1,...arr2];
    console.log(arr4);

    // mergine
    let arr5=[90,...arr4,80];
    console.log(arr5);

    // destructur
    let arr6=['amit','patel'];
    let [fname,lname]=arr6;
    // console.log(arr6[0]);
    console.log(fname);


    // obj

    let obj1 = {fname:"amit", age:18};
    let obj2 = {fname:"abhay", age:20};

    // copy

    let obj3 = {...obj1};
    console.log(obj3);

    // concate

    let obj4 ={...obj1,...obj2};
    console.log(obj4);

    // mergine

    let obj5 = {fname:"amit", age:18, city:"surat"};
    let obj6 = {fname:"abhay", age:20};

    let obj7 = {...obj5,...obj6};
    console.log(obj7);

    // destructuring
    // let {fname, age} = obj6;
    // console.log(fnmae);
    return (
        <div>
            
        </div>
    );
}

export default Smd;