//your JS code here. If required.
function activateSearch() {
        var searchContainer = document.getElementById('searchContainer');
        searchContainer.classList.add('active');

        // Focus on the input element after activating
        var inputElement = searchContainer.querySelector('.input');
        inputElement.focus();
    }