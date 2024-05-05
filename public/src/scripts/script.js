function darkMode (){
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    
    //state
    const theme = localStorage.getItem('theme')

    //on mount
    theme && document.body.classList.add(theme);

    //handlers
    const handleThemeToggle = ()=>{
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme','light-mode');
        } else {
            localStorage.removeItem('theme','light-mode');
            document.body.removeAttribute('class');
        }
    }

    //events
    themeToggleBtns.forEach(btn=>{
        btn.addEventListener('click', handleThemeToggle);
    });
}

function mobileNav  ()  {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //state
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

    });

    mobileLinks.forEach(link=>{
        link.addEventListener('click',()=>{
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
}