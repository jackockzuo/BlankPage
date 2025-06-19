
// function setRandomBackground() {
//   const images = ['page1.jpeg', 'bg/school.jpg'];
//   const randomIndex = Math.floor(Math.random() * images.length);
//   document.body.style.backgroundImage = `url('${images[randomIndex]}')`;
// }
window.onload = function() {
  // setRandomBackground();
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][now.getDay()];
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${year}年${month}月${day}日 ${weekday}`;
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
  }
  updateTime();
  setInterval(updateTime, 1000);

  const iconLinks = [
    { url: "https://github.com/", icon: "ico/github.png" },
    { url: "https://www.bilibili.com/", icon: "ico/b.png" },
    { url: "https://www.wolframalpha.com/", icon: "ico/wolfram.ico" },
    { url: "https://www.cczu.edu.cn/", icon: "ico/cczu.ico" },
    { url: "https://www.baidu.com", icon: "ico/baidu.ico" },
  ];

  const iconLinksContainer = document.getElementById('iconLinks');
  iconLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.style.margin = '10px';
    a.style.borderRadius = '50%';
    a.style.overflow = 'hidden';
    a.style.border = '5px solid rgba(255, 255, 255, 0.5)';
    a.style.backgroundColor = 'white';
    a.style.padding = '2px';

    const img = document.createElement('img');
    img.src = link.icon;
    img.width = 80;
    img.height = 80;
    a.appendChild(img);
    iconLinksContainer.appendChild(a);
  });
};
