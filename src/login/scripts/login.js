const rememberCb = document.getElementById('loginRememberInput');
const securityCb = document.getElementById('securityRememberInput');

const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 submit 이동 막기
  window.location.reload(); // 새로고침 실행
});

// 로그인 상태 유지 체크박스
function initRememberCheckbox() {
  updateRememberValue(); // 초기 동기화 (하드코딩 'false' 제거)
  rememberCb.addEventListener('change', updateRememberValue);
  rememberCb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      rememberCb.checked = !rememberCb.checked;
      rememberCb.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}
function updateRememberValue() {
  rememberCb.value = rememberCb.checked ? 'true' : 'false';
}

// IP 보안 체크박스
function initSecurityCheckbox() {
  updateSecurityValue(); // 초기 동기화
  securityCb.addEventListener('change', updateSecurityValue);
  securityCb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      securityCb.checked = !securityCb.checked;
      securityCb.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}
function updateSecurityValue() {
  securityCb.value = securityCb.checked ? 'true' : 'false';
}

// 초기 실행
(function initCheckboxes() {
  initRememberCheckbox();
  initSecurityCheckbox();
})();
