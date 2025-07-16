document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const img1 = document.getElementById('rotateImage');
                const img2 = document.getElementById('rotateImage2');
                const img3 = document.getElementById('rotateImage3');

                if (entry.isIntersecting) {
                    img1.style.transform = 'rotate(0deg)';
                    img2.classList.remove('xl:-bottom-[4px]');
                    img2.classList.add('xl:-bottom-[44px]');
                    img3.style.transform = 'rotate(0deg)';
                } else {
                    img1.style.transform = 'rotate(-62deg)';
                    img2.classList.remove('xl:-bottom-[44px]');
                    img2.classList.add('xl:-bottom-[4px]');
                    img3.style.transform = 'rotate(66deg)';
                }
            });
        },
        { threshold: 0.5 }
    );

    const targetSection = document.getElementById('expert-section');
    observer.observe(targetSection);
});

document.addEventListener('DOMContentLoaded', function () {
    const observer2 = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const topImg = document.getElementById('topImg');
                const bttmImg = document.getElementById('bttmImg');

                if (entry.isIntersecting) {
                    topImg.classList.remove('xl:top-0', 'xl:right-40');
                    topImg.classList.add('xl:!-top-[7rem]', 'xl:!right-20');

                    bttmImg.classList.remove('xl:left-48', 'xl:bottom-0');
                    bttmImg.classList.add('xl:!left-[6rem]', 'xl:!-bottom-[7rem]');

                } else {
                    topImg.classList.remove('xl:!-top-[7rem]', 'xl:!right-20');
                    topImg.classList.add('xl:top-0', 'xl:right-40');

                    bttmImg.classList.remove('xl:!left-[6rem]', 'xl:!-bottom-[7rem]');
                    bttmImg.classList.add('xl:left-48', 'xl:bottom-0');
                }

            });
        },
        { threshold: 0.5 }
    );

    const agencyServices = document.getElementById('agencyServices');
    observer2.observe(agencyServices);
}); 