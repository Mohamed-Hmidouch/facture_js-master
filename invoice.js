document.addEventListener('DOMContentLoaded', function() {
    const invoiceTable = document.getElementById('invoiceTable');
    const invoiceTotal = document.getElementById('invoiceTotal');
    
    // add initital total calculation first 
     document.getElementsByTagName('td')[1].getElementsByClassName('unitPrice');
    let total_item = document.getElementsByTagName('td')[1].getElementsByClassName('quantity');
        //here
    let total_elemnts = document.getElementsByClassName('itemTotal');
    // these are selection helpers

    

  let traduit = {
    total_1 : total_elemnts.length[1],
    total_2 : total_elemnts.length[2],
    total_3 : total_elemnts.length[3]
  };
  let js = JSON.parse(traduit);
    console.log(js);

    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
       
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
