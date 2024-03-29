const isFunction = (obj) => {
    const getType = {};
    return obj && getType.toString.call(obj) === '[object Function]';
  };
  
  const isValidDate = (date) => {
    const d = date;
    const i_fSpace = d.indexOf(' ');
    const data_str = d.substr(0, i_fSpace);
    const matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(data_str);
    if (matches === null) return false;
    const d_ = matches[2];
    const m = matches[1] - 1;
    const y = matches[3];
    const composedDate = new Date(y, m, d_);
    return composedDate.getDate() == d_ && composedDate.getMonth() == m && composedDate.getFullYear() == y;
  };
  
  const getRemainingTime = (endTime) => {
    if (!endTime) {
      return;
    }
    let t = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const remainingTime = {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
    return remainingTime;
  };
  
  const checkAndRunCallback = (callback) => {
    if (!isFunction(callback)) {
      return;
    } else {
      callback();
    }
  };
  
  export { isValidDate, getRemainingTime, checkAndRunCallback };  