//collect input from users.
//toggle items to check and uncheck.
//delete items from shopping list.
//render new item.

function renderNewItem(item) {
return `<li>
<span class="shopping-item">${item}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>`
}

function shoppingForm() {
    $('#js-shopping-list-form').on("submit", function(event){
        event.preventDefault();
        const text=$('#shopping-list-entry').val();
        $('.shopping-list').append(renderNewItem(text));
        this.reset();
    })
}
function checkItem() {
    $('.shopping-list').on("click", '.shopping-item-toggle', function(event) {
        $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    })
}
function deleteItem(){
    $('.shopping-list').on("click", '.shopping-item-delete', function(event) {
        $(event.currentTarget).closest('li').remove();
    })
}
function main() {
    shoppingForm();
    checkItem();
    deleteItem();
}
$(main); 