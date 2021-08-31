const btn=document.getElementById("menu_btn");
function togglesidebar() {
    document.body.classList.toggle("collapse-sidebar");
}

btn.addEventListener("click", togglesidebar);

const mediaQuery = matchMedia('(min-width: 768px)');

function handleChanges(e) {
    const isCollapsed = document.body.classList.contains('collapse-sidebar');

    if(e.matches) {
        // open sidebar
        if (isCollapsed) {
            document.body.classList.remove('collapse-sidebar');
        }
    } else {
        if (!isCollapsed) {
            document.body.classList.add('collapse-sidebar');
        }
    }
}

mediaQuery.addEventListener('change', handleChanges)

// initial check
handleChanges(mediaQuery)


