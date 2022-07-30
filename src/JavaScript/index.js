
    const links = document.querySelectorAll('[data-bs-toggle="tab"]');
    const contentLinks = document.querySelectorAll('.beast_content_item')

    const linksArr = Array.from(links);

    links.forEach((link) => {
        link.addEventListener('click', () => {
            /*links.forEach((l) => {
                l.classList.remove('active');
            });*/
            const nav = link.closest('ul');
            const activeElement = nav.querySelector('.active');
      
            const weAreLookingForThis = activeElement.dataset.bsTarget.split('').slice(1).join('');
            const neededTab = document.getElementById(weAreLookingForThis);
      
            const anotherNeededId = link.dataset.bsTarget.split('').slice(1).join('');
            const anotherNeededTab = document.getElementById(anotherNeededId);
      
            activeElement.classList.remove('active');
            neededTab.classList.remove('active');
      
            link.classList.add('active');
            anotherNeededTab.classList.add('active');
        
        })

    })
