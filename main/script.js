const toggleNavBtn = document.getElementById('toggleNavBtn');
const sideNav = document.getElementById('sideNavRight');
const overlay = document.getElementById('overlay');

// 버튼 클릭 시 네비게이션 바와 오버레이 토글
toggleNavBtn.addEventListener('click', function () {
  if (sideNav.style.right === '0px') {
    sideNav.style.right = '-200px';
    overlay.style.display = 'none'; // 오버레이 숨기기
    toggleNavBtn.classList.remove('hidden');
  } else {
    sideNav.style.right = '0px';
    overlay.style.display = 'block'; // 오버레이 보이기
    toggleNavBtn.classList.add('hidden');
  }
});

// 화면의 다른 부분 클릭 시 네비게이션 바와 오버레이 숨기기
document.addEventListener('click', function (event) {
  if (
    !sideNav.contains(event.target) &&
    !toggleNavBtn.contains(event.target) &&
    !overlay.contains(event.target)
  ) {
    sideNav.style.right = '-200px';
    overlay.style.display = 'none'; // 오버레이 숨기기
    toggleNavBtn.classList.remove('hidden');
  }
});

// 오버레이 클릭 시 네비게이션 바와 오버레이 숨기기
overlay.addEventListener('click', function () {
  sideNav.style.right = '-200px';
  overlay.style.display = 'none'; // 오버레이 숨기기
  toggleNavBtn.classList.remove('hidden');
});

document.querySelectorAll('nav img').forEach((img) => {
  img.addEventListener('mouseover', function () {
    this.style.transform = 'translateY(4px)'; // 아래로 4px 이동
  });
  img.addEventListener('mouseout', function () {
    this.style.transform = 'translateY(0)'; // 원래 위치로 이동
  });
});

// 메인 클럽 효과
document.querySelectorAll('#clubs_main img').forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'translateY(3px)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'translateY(0)';
  });
});

// sidenav 스크롤 애니메이션
document.querySelectorAll('#sideNav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// 타이머
function updateCountdown() {
  const targetDate = new Date('2024-10-06T00:00:00'); // D-Day date
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    document.getElementById('countdown').innerHTML = 'D-Day!';
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(
    2,
    '0'
  );
  document.getElementById('seconds').textContent = String(seconds).padStart(
    2,
    '0'
  );
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the correct time immediately
updateCountdown();
