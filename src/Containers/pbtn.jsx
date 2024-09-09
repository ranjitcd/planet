const PrintReceiptButton = ({ receiptData }) => {
    const handlePrint = () => {
      window.print();
    };
  
  
  
    return (
      <button onClick={handlePrint}>
        Print Receipt
      </button>
    );
  };


  export default PrintReceiptButton;
