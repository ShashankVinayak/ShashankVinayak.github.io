var main = function () {
    console.log("Main Loaded");
    var navListItem = document.getElementsByClassName('nav-list-item');
    var navListParent = document.getElementsByClassName('navigation')[0];
    var navObject = {
        profileNav: navListItem[0],
        skillsNav: navListItem[1],
        projectsNav: navListItem[2]
    };
    var navSelected = navObject.skillsNav;

    console.log("Selected nav item:" + navSelected.outerHTML);

    var pages = document.getElementsByClassName('page');
    var pageObject = {
        profilePage: pages[0],
        skillsPage: pages[1],
        projectsPage: pages[2]
    };
    var pageDisplayed = pageObject.skillsPage;


    navListParent.addEventListener('click', function (event) {
        if (event.target !== event.currentTarget) {
            if (event.target === navSelected) {
                console.log("Nothing to do here!!! Clicked on already selected element");
            } else if (event.target === navObject.profileNav) {
                navListItemClicked(navObject.profileNav);
                changeDisplay(pageObject.profilePage);
            } else if (event.target === navObject.skillsNav) {
                navListItemClicked(navObject.skillsNav);
                changeDisplay(pageObject.skillsPage);
            } else if (event.target === navObject.projectsNav) {
                navListItemClicked(navObject.projectsNav);
                changeDisplay(pageObject.projectsPage);
            } else {
                console.log("Something went wrong! Clicked something else: " + event.target);
            }
        }
    });

    var navListItemClicked = function (ele) {
        navSelected.classList.remove('selected');
        ele.classList.add('selected');
        navSelected = ele;
    };

    var changeDisplay = function (ele) {
        pageDisplayed.classList.add('hide');
        ele.classList.remove('hide');
        pageDisplayed = ele;
    }
};

window.addEventListener('load', main);