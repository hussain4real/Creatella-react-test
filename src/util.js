// a utility component for formatting currency and other utility purposes
export default {
  formatCurrency: function(num) {
    return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
  }
};
