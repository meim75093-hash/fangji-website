/**
 * 粉防杞官网 - 主 JavaScript 文件
 * 处理导航、交互等功能
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有功能
  initNavbar();
  initMobileMenu();
  initWechatFloat();
  initSmoothScroll();
  initAnimations();
});

/**
 * 导航栏滚动效果
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    // 检查初始滚动位置
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/**
 * 移动端菜单切换
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // 切换按钮图标
      if (navLinks.classList.contains('active')) {
        mobileMenuBtn.textContent = '✕';
      } else {
        mobileMenuBtn.textContent = '☰';
      }
    });
    
    // 点击链接后关闭菜单
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }
}

/**
 * 浮动微信按钮功能
 */
function initWechatFloat() {
  const wechatFloat = document.getElementById('wechatFloat');
  const wechatPopup = document.getElementById('wechatPopup');
  
  if (wechatFloat && wechatPopup) {
    let isPopupVisible = false;
    
    wechatFloat.addEventListener('click', function() {
      isPopupVisible = !isPopupVisible;
      
      if (isPopupVisible) {
        wechatPopup.classList.add('show');
      } else {
        wechatPopup.classList.remove('show');
      }
    });
    
    // 点击页面其他地方关闭弹窗
    document.addEventListener('click', function(event) {
      if (!wechatFloat.contains(event.target) && !wechatPopup.contains(event.target)) {
        wechatPopup.classList.remove('show');
        isPopupVisible = false;
      }
    });
  }
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
  // 为所有内部链接添加平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#' && targetId !== '#wechatSection') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navbarHeight = 70;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/**
 * 动画效果
 */
function initAnimations() {
  // 使用 Intersection Observer 实现滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 观察所有需要动画的元素
  const animatedElements = document.querySelectorAll('.product-card, .benefit-card, .testimonial-card, .contact-card');
  
  animatedElements.forEach(function(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

/**
 * 产品卡片点击跳转（可选功能）
 */
function goToProductDetail(productId) {
  // 预留产品详情页跳转功能
  console.log('跳转到产品详情:', productId);
}

/**
 * 添加到购物车（预留功能）
 */
function addToCart(productId, productName) {
  // 预留购物车功能
  alert('如需购买，请添加客服微信：fangji_vip');
}

/**
 * 联系客服
 */
function contactService() {
  const wechatPopup = document.getElementById('wechatPopup');
  if (wechatPopup) {
    wechatPopup.classList.add('show');
  }
}

/**
 * 页面加载完成提示（可选）
 */
window.addEventListener('load', function() {
  // 可以在这里添加页面加载完成的提示或其他操作
  console.log('粉防杞官网加载完成');
});

/**
 * 防止快速双击缩放（移动端优化）
 */
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

/**
 * 图片懒加载（如果有图片的话）
 */
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(function(img) {
    imageObserver.observe(img);
  });
}

// 导出函数供外部使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initNavbar,
    initMobileMenu,
    initWechatFloat,
    contactService
  };
}
