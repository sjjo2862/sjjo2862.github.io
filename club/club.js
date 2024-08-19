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
