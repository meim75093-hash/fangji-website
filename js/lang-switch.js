/**
 * 粉防杞官网 - 语言切换功能
 * Language Switcher for HanFangji Herbal Website
 */

// 语言配置
const LANG_CONFIG = {
  zh: '🇨🇳 中文',
  en: '🇺🇸 English'
};

// 默认语言
const DEFAULT_LANG = 'en';

// 初始化语言切换
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
  loadSavedLanguage();
});

/**
 * 初始化语言切换按钮
 */
function initLanguageSwitcher() {
  // 创建语言切换按钮
  const langSwitcher = document.createElement('div');
  langSwitcher.className = 'lang-switcher';
  langSwitcher.innerHTML = `
    <button id="langToggle" class="lang-toggle" aria-label="Switch Language">
      <span id="currentLang">${LANG_CONFIG[DEFAULT_LANG]}</span>
      <span class="lang-arrow">▼</span>
    </button>
    <div id="langDropdown" class="lang-dropdown">
      <button data-lang="zh">${LANG_CONFIG.zh}</button>
      <button data-lang="en">${LANG_CONFIG.en}</button>
    </div>
  `;
  
  // 添加到导航栏
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.appendChild(langSwitcher);
  }
  
  // 绑定事件
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  
  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });
  
  // 点击选项切换语言
  langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      langDropdown.classList.remove('show');
    });
  });
  
  // 点击页面其他地方关闭下拉菜单
  document.addEventListener('click', function() {
    langDropdown.classList.remove('show');
  });
}

/**
 * 设置语言
 */
function setLanguage(lang) {
  // 保存偏好
  localStorage.setItem('fangji_lang', lang);
  
  // 更新按钮显示
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = LANG_CONFIG[lang];
  }
  
  // 切换所有文本
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    if (lang === 'zh') {
      element.textContent = element.getAttribute('data-zh');
    } else {
      element.textContent = element.getAttribute('data-en');
    }
  });
  
  // 更新 HTML lang 属性
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  console.log('Language switched to:', lang);
}

/**
 * 加载保存的语言偏好
 */
function loadSavedLanguage() {
  const savedLang = localStorage.getItem('fangji_lang') || DEFAULT_LANG;
  setLanguage(savedLang);
}
