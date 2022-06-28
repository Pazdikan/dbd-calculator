document.querySelectorAll('.emblem').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log(`Opened menu ${e.target.id.replace('Emblem', '') + 'Menu'}`);
        document.getElementById(e.target.id.replace('Emblem', '') + 'Menu').classList.toggle('show-menu');
        document.querySelectorAll('.menu').forEach(function(item) {
            if (item.id != e.target.id.replace('Emblem', '') + 'Menu') {
                item.classList.remove('show-menu');
            }
        });
    });
});