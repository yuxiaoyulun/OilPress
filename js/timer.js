function timeFn(dom1,dom2){
  var Houer = '';
  var Minutes = '';
  var second = '';
  var Year = '';
  var Mounth = '';
  var date = '';
  var time = new Date();
  function timeFormat(time){
    if (!time){
      time = new Date();
    }
    let str = '';
    Houer = time.getHours();
    Minutes = time.getMinutes();
    second = time.getSeconds();
    str = (Houer<10?'0'+ Houer:Houer) + ':' + (Minutes<10?'0'+ Minutes:Minutes) + ':' + (second<10?'0'+ second:second);
    return str;
  };
  function dateFormat(time){
    if (!time){
      time = new Date();
    }
    let str = '';
    Year = time.getFullYear();
    Mounth = time.getMonth()+1;
    date = time.getDate();
    str = Year + '/' + (Mounth<10?'0'+ Mounth:Mounth) + '/' + (date<10?'0'+ date:date);
    return str;
  }

  var dateStr = dateFormat();
  dom1.innerHTML = timeFormat(time);
  dom2.innerHTML = dateStr;
  setInterval(function(){
    let time = new Date();
    let str = timeFormat(time);
    dom1.innerHTML = str;
  },1000);
};