var p = document.getElementById('oInp');
var oul = document.getElementById('ul');
var oAge = document.getElementById('age');
var age= document.getElementById('ageo');
var oFemale = document.getElementById('female');
var oMale = document.getElementById('male');
var oAll = document.getElementById('all') ;
var minAge =  0;
var maxAge = 100;
var obj = [
    {
        name: "邓小宝",
        age: 23,
        sex: "female"
    },
    {
        name: "小宝宝",
        age: 14,
        sex: "male"
    },
    {
        name: "王大伟",
        age: 24,
        sex: "female"
    },
    {
        name: "王宝强",
        age: 34,
        sex: "male"
    },
    {
        name: "宋小宝",
        age: 34,
        sex: "female"
    },
    {
        name: "李刚",
        age: 34,
        sex: "male"
    },
    {
        name: "李玉",
        age: 34,
        sex: "female"
    },
    {
        name: "龙天颖",
        age: 34,
        sex: "male"
    },
    {
        name: "天龙",
        age: 34,
        sex: "male"
    }
];
    var lastSex= "all";
var filterArray = obj;
function show(arr) {
    //使用字符串相是比较好的方法
    //若每次循环都用document.createElement('li')和appendChild(li)性能不比字符串好,但是是可以实现的;
    var htmlArr = "";
    arr.forEach(function (ele, index) {
        htmlArr += '<li>' + 'name:' + ele.name + ' age:' + ele.age + ' sex:' + ele.sex + '</li>';
        //每次循环将相应数据用字符串连接起来;
    })
    oul.innerHTML = htmlArr;
    //一次性插入ul列表内
}
//筛选名字
function rea(allPerson, value) {
    return allPerson.filter(function (ele, index) {
        return ele.name.indexOf(value) != -1;
    });
}
 //筛选年龄
 function addAge(filterArr){
  return   filterArr.map(function(ele,index){
        ele.age ++;
        return ele;
    })
}
//筛选性别
function filterSex(filterArr,sex){
    return filterArr.filter(function(ele,index){
        return sex === 'all' ? true : ele.sex === sex;
    })
}

//筛选最小年龄
function filterAge(filterArr,minAge,maxAge){
   return filterArr.filter(function(ele,index){
       return ele.age >= minAge && ele.age <= maxAge;
   })
}
//    p.oninput = function () {
//         show(filterArray = rea(obj, this.value));
//         lastSex = 'all';
//     }
//     oAge.onclick= function(){
//         show(addAge(filterSex(filterArray,lastSex)));
//     }
//     oFemale.onclick=function(){
//         show(filterSex(filterArray,lastSex='female'));
//     }
//     oMale.onclick=function(){
//         show(filterSex(filterArray,lastSex='male'));
//     }
//     oAll.onclick=function(){
//         show(filterSex(filterArray,lastSex='all'));
//     }
//     age.onclick=function(){
//         minAge= prompt("请输入想要筛选的最小年龄:");
//         maxAge= prompt("请输入想要筛选的最大年龄:");
//         show(filterArray=filterAge(filterSex(filterArray,lastSex),minAge,maxAge));
//     }

var action = [
    {doc:p,type:'filterName'},
    {doc:oAge,type:'addAge'},
    {doc:age,type:'filterAge'},
    {doc: oMale, type: 'filterSex', prame: 'male'},
    {doc: oFemale, type: 'filterSex', prame: 'female'},
    {doc: oAll, type: 'filterSex', prame: 'all'}
]
function blinkEvent(action){
    action.forEach(function(ele,index){
        switch(ele.type){
            case 'filterName':ele.doc.oninput =function () {
    show(filterArray = rea(obj, this.value));
    lastSex = 'all';

};break;
case 'addAge':ele.doc.onclick= function(){
    show(addAge(filterSex(filterArray,lastSex)));
};break;
case 'filterAge':ele.doc.onclick=function(){
    minAge= prompt("请输入想要筛选的最小年龄:");
    maxAge= prompt("请输入想要筛选的最大年龄:");
    show(filterArray=filterAge(filterSex(filterArray,lastSex),minAge,maxAge));
};break;
case 'filterSex':ele.doc.onclick = function(){
    show(filterSex(filterArray,lastSex=ele.prame));
}
        }
    })
}
blinkEvent(action);