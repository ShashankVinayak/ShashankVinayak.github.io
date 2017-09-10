var main = function(){
    var menuLinkItem = document.getElementsByClassName('portfolio-menu-link');
    var menuList = document.getElementsByClassName('pure-menu-list')[0];
    var menuObject = {
        profileLink : menuLinkItem[0],
        skillsLink : menuLinkItem[1],
        projectLink : menuLinkItem[2]
    };
    var menuSelected = menuObject.skillsLink;

    var profileSection = document.getElementById('portfolio-profile');
    var skillsSection = document.getElementById('portfolio-skills');
    var projectSection = document.getElementById('portfolio-projects');

    var sectionVisible = skillsSection;


    menuList.addEventListener('click', function (event) {
        if (event.target !== event.currentTarget) {
            if (event.target === menuSelected) {
                console.log("Nothing to do here!!! Clicked on already selected element");
            } else if (event.target === menuObject.profileLink) {
                updateDisplay(menuObject.profileLink, profileSection);
            } else if (event.target === menuObject.skillsLink) {
                updateDisplay(menuObject.skillsLink, skillsSection);
            } else if (event.target === menuObject.projectLink) {
                updateDisplay(menuObject.projectLink, projectSection);
            } else {
                console.log("Something went wrong! Clicked something else: " + event.target);
            }
        }
    });

    var updateDisplay = function(menuItemClicked, sectionToDisplay){
        highlightMenuListItemClicked(menuItemClicked);
        changeDisplay(sectionToDisplay);
    };

    var highlightMenuListItemClicked = function (ele) {
        menuSelected.classList.remove('portfolio-menu-link-selected');
        ele.classList.add('portfolio-menu-link-selected');
        menuSelected = ele;
    };

    var changeDisplay = function (ele) {
        sectionVisible.classList.add('portfolio-hide');
        ele.classList.remove('portfolio-hide');
        sectionVisible = ele;
    }
};

window.addEventListener('load', main);