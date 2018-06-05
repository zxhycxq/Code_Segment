
const imgUrl = 'http://pms.jieyisoft.com/liimage/';
const FetchUrl = 'https://www.foodbev.com.cn/';

const mchntid = 100000000000999;
const mac = "02BE33CB73B7A4BD99254EA1C5000DA57F94E2F8B507A3D5CFFDE7BE3A3E25156E8EC92E9EBD63EB0DE5A61C9211E570ECDA5D253995E303CCEFDE90E752276F8770CCBFEE48FE37F12C8AD605FA50BCB2C02EA4DBBCDCF65A0718345D0ACB918F3019C957B5924216EA371C71A8C8FF997F7EEB28FFC082BA7650517B5C4A07"
const formatTime = date => {
  const year = date.getFullYear ()
  const month = date.getMonth () + 1
  const day = date.getDate ()
  const hour = date.getHours ()
  const minute = date.getMinutes ()
  const second = date.getSeconds ()
  return [year, month, day].map (formatNumber).join ('/') + ' ' + [hour, minute, second].map (formatNumber).join (':')
}

const formatNumber = n => {
  n = n.toString ()
  return n[1] ? n : '0' + n
}

function CurrentTime() {
  function addZero(time) {
    return time >= 10 ? time : '0' + time;
  }
  
  var date = new Date (),
      year = date.getFullYear (),
      month = addZero (date.getMonth () + 1),
      day = addZero (date.getDate ()),
      hour = addZero (date.getHours ()),
      minutes = addZero (date.getMinutes ()),
      Seconds = addZero (date.getSeconds ()),
      txndate = `${year}${month}${day}`,
      txntime = `${hour}${minutes}${Seconds}`,
      currentTime = `${txndate}${txntime}`,
      getMilliseconds = date.getMilliseconds (),
      random = parseInt ((
          Math.random () * 1000000
      ), 10),
      syssesq = `${txndate}${txntime}${getMilliseconds}${random}`;
  return {
    date,
    year,
    month,
    day,
    hour,
    minutes,
    Seconds,
    txndate,
    txntime,
    currentTime,
    random,
    syssesq
  };
}

function postrequest(data, fun) {
  var dataStr = JSON.stringify (data);
  wx.request ({
    url: 'https://www.foodbev.com.cn/',
    // url: 'http://192.168.1.137:20101/',
    data: {
      data: dataStr
    },
    method: "POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: fun,
    fail: function (res) {
      console.log (`fail`, res)
    }
  })
}
// 日期正则先关
function phoneReplace(times) {
  return times.replace (/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5')
}

function phoneReplaceAll(times) {
  return times.replace (/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6')
}

function HHmmssReplace(times) {
  return times.replace (/(\d{2})(\d{2})(\d{2})/, '$1:$2')
}
// TODO 0的判断
function SecondToAfter(seconds) {
  var hourRes=parseInt(seconds/60/60,10);
  var minuteRes=parseInt(seconds/60%60,10);
  // console.log(`FENZ`,minuteRes);
  return [
    hourRes<=0?'':hourRes+"时",
    minuteRes<=0?'以后':minuteRes+"分",
  ].join('')
}
function SecondToAll(seconds) {
  var hourRes=parseInt(seconds/60/60,10);
  var minuteRes=parseInt(seconds/60%60,10);
  var secondRes=parseInt(seconds%60,10);
  return [
    hourRes<=0?'':hourRes+"时",
    minuteRes<10?'0'+minuteRes+"分":minuteRes+"分",
    secondRes<10?'0'+secondRes+"秒":secondRes+"秒",
  ].join('')
}

module.exports = {
  mchntid,
  mac,
  imgUrl,
  formatTime,
  postrequest,
  CurrentTime,
  phoneReplace,
  phoneReplaceAll,
  HHmmssReplace,
  SecondToAfter
}
