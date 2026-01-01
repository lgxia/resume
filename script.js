// JavaScript交互效果

document.addEventListener('DOMContentLoaded', function() {
    // 技能条动画
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // 观察技能条元素，当进入视口时触发动画
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.style.width;
                skillLevel.style.width = '0%';
                
                // 延迟执行动画，创造更好的视觉效果
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 300);
                
                // 一旦动画触发，停止观察
                observer.unobserve(skillLevel);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // 观察所有技能条
    skillLevels.forEach(skillLevel => {
        observer.observe(skillLevel);
    });
    
    // 创建回到顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.id = 'backToTop';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);
    
    // 为回到顶部按钮添加样式
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #3498db;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            z-index: 1000;
        }
        
        .back-to-top:hover {
            background-color: #2980b9;
            transform: scale(1.1);
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
    `;
    document.head.appendChild(style);
    
    // 滚动时显示/隐藏回到顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 点击回到顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 创建打印按钮
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> 打印简历';
    printBtn.id = 'printBtn';
    printBtn.className = 'print-btn';
    document.body.appendChild(printBtn);
    
    // 为打印按钮添加样式
    const printStyle = document.createElement('style');
    printStyle.textContent = `
        .print-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #27ae60;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .print-btn:hover {
            background-color: #229954;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        @media print {
            .back-to-top,
            .print-btn {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(printStyle);
    
    // 点击打印简历
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 兴趣爱好图标悬停效果增强
    const interestIcons = document.querySelectorAll('.interest-icons i');
    interestIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 为项目和经验添加悬停效果
    const experienceItems = document.querySelectorAll('.experience-item, .project-item, .education-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// 添加响应式菜单（如果需要）
// 由于当前简历是单页设计，不需要复杂的导航菜单，但可以预留接口
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}