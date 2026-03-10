/**
 * 汉防己草本官网 - 主 JavaScript 文件
 * 处理导航、交互、动画等功能
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有功能
  initNavbar();
  initMobileMenu();
  initWechatFloat();
  initSmoothScroll();
  initAnimations();
  initBackToTop();
  initScrollAnimations();
  initLazyLoad();
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
    
    // 监听滚动事件 - 使用节流优化性能
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
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
    
    wechatFloat.addEventListener('click', function(e) {
      e.stopPropagation();
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
          const navbarHeight = 80;
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
 * 返回顶部按钮
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    // 监听滚动事件显示/隐藏按钮
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * 滚动动画 - Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // 动画完成后停止观察
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(function(element) {
    observer.observe(element);
  });
}

/**
 * 动画效果
 */
function initAnimations() {
  // 为卡片元素添加初始状态
  const cards = document.querySelectorAll('.product-card, .benefit-card, .testimonial-card, .contact-card');
  
  cards.forEach(function(element, index) {
    // 添加 staggered 延迟效果
    element.style.transitionDelay = (index % 4) * 0.1 + 's';
  });
}

/**
 * 图片懒加载
 */
function initLazyLoad() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if (lazyImages.length === 0) return;
  
  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(function(img) {
    imageObserver.observe(img);
  });
}

/**
 * 数字滚动动画（用于统计数据）
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(function() {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // 格式化数字
    if (target >= 10000) {
      element.textContent = (current / 10000).toFixed(0) + '万+';
    } else if (target >= 1000) {
      element.textContent = Math.floor(current) + '+';
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

/**
 * 初始化统计数字动画
 */
function initStatsAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const element = entry.target;
        const text = element.textContent;
        
        // 提取数字
        const match = text.match(/(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.replace(/\d+/g, '');
          
          // 简单动画
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
              element.textContent = target + suffix;
              clearInterval(timer);
            } else {
              element.textContent = Math.floor(current) + suffix;
            }
          }, 30);
        }
        
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  statNumbers.forEach(function(stat) {
    observer.observe(stat);
  });
}

// 页面加载完成后初始化统计动画
window.addEventListener('load', initStatsAnimation);

/**
 * 添加页面加载完成类
 */
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

/**
 * 性能优化 - 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 性能优化 - 节流函数
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
