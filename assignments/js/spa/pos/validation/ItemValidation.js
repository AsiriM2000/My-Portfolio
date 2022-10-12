$("#txtItemCode").focus();

const itemRegEx = /^(C00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const itemQtyRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const itemUnitPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
